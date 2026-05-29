"use client";

import { create } from "zustand";

type ToletFilterState = {
  query: string;
  category: string;
  location: string;
  propertyFor: string;
  minRent: string;
  maxRent: string;
};

type ServiceFilterState = {
  query: string;
  category: string;
  location: string;
  availability: string;
  minRate: string;
  maxRate: string;
};

type FilterState = {
  toletFilters: ToletFilterState;
  serviceFilters: ServiceFilterState;

  setToletFilter: <K extends keyof ToletFilterState>(
    key: K,
    value: ToletFilterState[K]
  ) => void;

  setServiceFilter: <K extends keyof ServiceFilterState>(
    key: K,
    value: ServiceFilterState[K]
  ) => void;

  resetToletFilters: () => void;
  resetServiceFilters: () => void;
};

const initialToletFilters: ToletFilterState = {
  query: "",
  category: "",
  location: "",
  propertyFor: "",
  minRent: "",
  maxRent: ""
};

const initialServiceFilters: ServiceFilterState = {
  query: "",
  category: "",
  location: "",
  availability: "",
  minRate: "",
  maxRate: ""
};

export const useFilterStore = create<FilterState>((set) => ({
  toletFilters: initialToletFilters,
  serviceFilters: initialServiceFilters,

  setToletFilter: (key, value) =>
    set((state) => ({
      toletFilters: {
        ...state.toletFilters,
        [key]: value
      }
    })),

  setServiceFilter: (key, value) =>
    set((state) => ({
      serviceFilters: {
        ...state.serviceFilters,
        [key]: value
      }
    })),

  resetToletFilters: () =>
    set({
      toletFilters: initialToletFilters
    }),

  resetServiceFilters: () =>
    set({
      serviceFilters: initialServiceFilters
    })
}));