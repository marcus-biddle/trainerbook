import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerDashboard from '~/features/trainer/Dashboard';
import { TrainerHome } from '~/features/trainer/TrainerHome';
// import { supabase } from '../lib/supabase'; // Your Supabase client

const TrainerHomePage = () => {
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
    <TrainerHome />
  );
};

export default TrainerHomePage;