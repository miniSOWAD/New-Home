import { MapPin } from "lucide-react";

type LocationMapProps = {
  location?: string;
  address?: string;
};

export function LocationMap({ location, address }: LocationMapProps) {
  return (
    <div className="overflow-hidden rounded-[1.7rem] border border-orange-100 bg-white shadow-sm">
      <div className="flex h-72 items-center justify-center bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-3xl bg-white text-orange-500 shadow-lg">
            <MapPin className="size-8" />
          </div>

          <h3 className="text-xl font-black text-slate-950">
            {location ?? "Location Map"}
          </h3>

          <p className="mt-2 max-w-sm text-sm text-slate-500">
            {address ??
              "Map integration with Google Maps or OpenStreetMap will be connected later."}
          </p>
        </div>
      </div>
    </div>
  );
}