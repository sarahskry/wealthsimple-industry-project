import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import GoalsApi from "./goals-api";

export const useFetchGoals = () => {
  const goalsApi = useMemo(() => new GoalsApi(), []);
  const [goals, setGoals] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await goalsApi.getGoals();
        setGoals(fetchedData);
      } catch (error) {
        console.error(`Error fetching goals: ${error}`)
      } 
    }

    fetchData();
  }, [goalsApi])

  return { goals }
}

export const useFetchOneGoal = (contributionAmount) => {
  const goalsApi = useMemo(() => new GoalsApi(), []);
  const { id } = useParams();
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await goalsApi.getGoalId(id);
        setGoal(fetchedData);
      } catch (error) {
        console.error(`Error fetching goal with id ${id}: ${error}`)
      }
    }

    fetchData();
  }, [goalsApi, contributionAmount])

  return { goal }
}

export const usePutGoal = () => {
  const goalsApi = useMemo(() => new GoalsApi(), []);
  const { id } = useParams();
  const [goalAmount, setGoalAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (goalAmount !== null) {
          const fetchedData = await goalsApi.putGoalId(id, goalAmount);
        }
        // setGoalAmount(fetchedData);
      } catch (error) {
        console.error(`Error putting Goal Amount`)
      }
    }

    fetchData();
  }, [goalAmount])

  return { goalAmount, setGoalAmount }
}

export const usePatchGoal = () => {
  const goalsApi = useMemo(() => new GoalsApi(), []);
  const { id } = useParams();
  const [contributionAmount, setContributionAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (contributionAmount !== null) {
          const fetchedData = await goalsApi.patchGoalId(id, contributionAmount);
        }
        // setContributionAmount(fetchedData);
      } catch (error) {
        console.error(`Error patching contribution`)
      }
    }

    fetchData();
  }, [contributionAmount])

  return { contributionAmount, setContributionAmount }
}