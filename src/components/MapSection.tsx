'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Mapbox = dynamic(() => import('./Mapbox'), {
  ssr: false,
  loading: () => (
    <Card className="h-[300px] flex items-center justify-center">
      <p className="text-white/70">Loading map...</p>
    </Card>
  ),
});

type Spot = {
  id: string;
  name: string;
  coordinates: [number, number];
  rating: number;
};

export function MapSection() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [spots, setSpots] = useState<Spot[]>([]);
  const [bestSpot, setBestSpot] = useState<Spot | null>(null);

  useEffect(() => {
    // Get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.longitude, position.coords.latitude]);
        // TODO: Fetch nearby spots from API
        const mockSpots: Spot[] = [
          {
            id: '1',
            name: 'Ocean View',
            coordinates: [-122.4194, 37.7749],
            rating: 4.8,
          },
          {
            id: '2',
            name: 'Hilltop',
            coordinates: [-122.4294, 37.7849],
            rating: 4.5,
          },
        ];
        setSpots(mockSpots);
        setBestSpot(mockSpots[0]);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
              setUserLocation([position.coords.longitude, position.coords.latitude]);
            });
          }}
        >
          Refresh Location
        </Button>
      </div>
      
      {userLocation ? (
        <Mapbox
          userLocation={userLocation}
          spots={spots}
          bestSpot={bestSpot}
          className="h-[300px] rounded-lg overflow-hidden"
        />
      ) : (
        <Card className="h-[300px] flex items-center justify-center">
          <p className="text-white/70">Enable location to view map</p>
        </Card>
      )}
    </div>
  );
}
