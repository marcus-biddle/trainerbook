import React from 'react';
import { Button } from '../ui/Button';
import { Skeleton } from '../ui/Skeleton';

interface ClientListProps {
  clients: any[];
  loading: boolean;
}

export const ClientList: React.FC<ClientListProps> = ({ clients, loading }) => {
  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50">
        <div className="h-6 bg-gray-200 rounded-lg mb-6 w-48" />
        <div className="space-y-4">
          {[1,2,3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-10 w-20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-12 text-center shadow-lg border border-white/50">
        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          👥
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No clients yet</h3>
        <p className="text-gray-500 mb-6">Invite your first client to get started!</p>
        <Button size="lg" className="w-full sm:w-auto">Add your first client</Button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">Clients <span className="text-sm text-gray-500">({clients.length})</span></h3>
      <div className="space-y-3">
        {clients.map((client) => (
          <div key={client.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-white/50 to-indigo-50/30 rounded-xl hover:shadow-md transition-all group">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                {client.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900 truncate">{client.name}</p>
                <p className="text-sm text-gray-500">
                  Last workout: {client.lastWorkout ?? 'Never'} • Next: {client.nextSession ?? 'None'}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="ml-4 whitespace-nowrap">View</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
