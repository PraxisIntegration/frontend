export const initDeposit = async (params) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/praxis/initiate-deposit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );

  if (!response.ok) {
    throw new Error("Submission failed");
  }

  return await response.json();
};

export const initWithdrawal = async (params) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/praxis/initiate-withdrawal`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );

  if (!response.ok) {
    throw new Error("Submission failed");
  }

  return await response.json();
};
