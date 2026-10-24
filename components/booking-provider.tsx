
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type BookingItem = {
  slug: string;
  eventDate?: string;
};

type BookingContextValue = {
  items: BookingItem[];
  count: number;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  setDate: (slug: string, date: string) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<BookingItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const cookie = document.cookie
        .split("; ")
        .find((item) => item.startsWith("hager-booking="));

      if (cookie) {
        const value = cookie.slice("hager-booking=".length);
        const parsed: unknown = JSON.parse(decodeURIComponent(value));

        if (Array.isArray(parsed)) {
          const validItems = parsed.filter(
            (item): item is BookingItem =>
              item !== null &&
              typeof item === "object" &&
              typeof item.slug === "string",
          );

          setItems(
            validItems.filter(
              (item, index, array) =>
                array.findIndex((other) => other.slug === item.slug) ===
                index,
            ),
          );
        }
      }
    } catch {
      setItems([]);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    document.cookie =
      `hager-booking=${encodeURIComponent(
        JSON.stringify(items),
      )}; path=/; max-age=2592000; SameSite=Lax`;
  }, [items, loaded]);

  const add = (slug: string) => {
    setItems((current) => {
      if (current.some((item) => item.slug === slug)) {
        return current;
      }

      return [...current, { slug }];
    });
  };

  const remove = (slug: string) => {
    setItems((current) =>
      current.filter((item) => item.slug !== slug),
    );
  };

  const setDate = (slug: string, date: string) => {
    setItems((current) =>
      current.map((item) =>
        item.slug === slug ? { ...item, eventDate: date } : item,
      ),
    );
  };

  return (
    <BookingContext.Provider
      value={{
        items,
        count: items.length,
        add,
        remove,
        setDate,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error(
      "useBooking must be used inside BookingProvider",
    );
  }

  return context;
}
