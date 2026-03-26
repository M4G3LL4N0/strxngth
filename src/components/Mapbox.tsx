'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

type MapboxProps = {
  userLocation: [number, number];
  spots: {
    id: string;
    name: string;
    coordinates: [number, number];
    rating: number;
  }[];
  bestSpot: {
    id: string;
    name: string;
    coordinates: [number, number];
    rating: number;
  } | null;
  className?: string;
};

export function Mapbox({ userLocation, spots, bestSpot, className }: MapboxProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: userLocation,
      zoom: 13,
    });

    // Add user location marker
    new mapboxgl.Marker({ color: '#3b82f6' })
      .setLngLat(userLocation)
      .addTo(map.current);

    // Add spot markers
    spots.forEach((spot) => {
      const marker = new mapboxgl.Marker({
        color: spot.id === bestSpot?.id ? '#f59e0b' : '#6b7280',
      })
        .setLngLat(spot.coordinates)
        .addTo(map.current!);

      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(spot.name);
      marker.setPopup(popup);
    });

    return () => {
      map.current?.remove();
    };
  }, [userLocation, spots, bestSpot]);

  return <div ref={mapContainer} className={className} />;
}
