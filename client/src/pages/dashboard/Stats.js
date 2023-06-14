import { useEffect,useReducer } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import axios from "axios";
import { SHOW_STATS_BEGIN, SHOW_STATS_SUCCESS } from "../../context/action";
import reducer from "../../context/reducer";

const Stats = () => {
  // const { showStats, isLoading, monthlyApplications } = useAppContext();

  const { isLoading, monthlyApplications, token,showStats } = useAppContext();

    
  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }



  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
