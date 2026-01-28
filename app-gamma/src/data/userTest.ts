

type User = { 
  id: string | null
  firstName: string | null
  lastName: string | null
  premium: boolean
  suggestedPortfolio: string | null
}


const getUserTest = (): User => {
  return {  
  id: 'user-1',
  firstName: localStorage.getItem('firstName') ?? null,
  lastName: localStorage.getItem('lastName')?? null,
  premium: JSON.parse(localStorage.getItem('premium') ?? "false"),
  suggestedPortfolio: localStorage.getItem('suggestedPortfolio') ?? null,
}
  
}

export default getUserTest;

export function updateUserTest(data: Partial<User>){
  if (data.firstName) localStorage.setItem('firstName', data.firstName);
  if (data.lastName) localStorage.setItem('lastName', data.lastName);
  if (typeof data.premium === 'boolean') localStorage.setItem('premium', JSON.stringify(data.premium));
  if (data.suggestedPortfolio) localStorage.setItem('suggestedPortfolio', data.suggestedPortfolio);
}

