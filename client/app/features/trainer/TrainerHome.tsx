import React, { useState } from 'react';
import { ClientList } from './ClientList';
// import { QuickActions } from './QuickActions';
// import { ActivityFeed } from './ActivityFeed';
// import { AvatarMenu } from '../common/AvatarMenu';
import { useTrainerData } from '../../hooks/useTrainerData';
import { Skeleton } from '../ui/Skeleton';
import { StatsCard } from '../ui/StatsCard';
import { DataTable } from './DataTable';
import fake from './fake.json'

export const TrainerHome: React.FC = () => {
  const { data, loading, error } = useTrainerData();
  const [trainerName] = useState('John Doe'); // Replace with real auth data

  if (error) return <div className="flex items-center justify-center min-h-screen text-red-500">Authentication required</div>;

  return (
    <div className="min-h-screen bg-background text-primary">
      <div className="max-w-6xl mx-auto">

        {/* Quick Stats */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Total Clients"
              value={data?.clientsCount ?? 0}
              action="Add Client"
              href="/trainer/clients/new"
            />
            <StatsCard
              title="Active Programs"
              value={data?.programsCount ?? 0}
            />
            <StatsCard
              title="Upcoming Sessions"
              value={data?.sessionsCount ?? 0}
            />
          </div>
        )}

        {/* Clients & Actions */}
        <div className="">
            {/* <ClientList clients={data?.clients ?? []} loading={loading} /> */}
            <DataTable data={fake} />
          {/* <QuickActions /> */}
        </div>

        {/* Recent Activity */}
        {/* <ActivityFeed activities={data?.recentActivities ?? []} loading={loading} /> */}
      </div>
    </div>
  );
};
