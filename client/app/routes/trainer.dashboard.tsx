import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerDashboard from '~/features/trainer/Dashboard';
import { TrainerHome } from '~/features/trainer/TrainerHome';
// import { supabase } from '../lib/supabase'; // Your Supabase client

const TrainerLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // const checkAuth = async () => {
    //   const { data: { session } } = await supabase.auth.getSession();
    //   if (!session) {
    //     navigate('/login');
    //   }
    // };
    // checkAuth();
  }, [navigate]);

  return (
    <TrainerDashboard />
  );
};

export default TrainerLayout;