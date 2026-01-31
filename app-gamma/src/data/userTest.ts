

export type User = { 
  id: string | null
  userName: string | null
  premium: boolean
  suggestedPortfolio: string | null
}


const getUserTest = (): User => {
  return {  
  id: 'user-1',
  userName: localStorage.getItem('userName')?? null,
  premium: JSON.parse(localStorage.getItem('premium') ?? "false"),
  suggestedPortfolio: localStorage.getItem('suggestedPortfolio') ?? null,
}
  
}

export default getUserTest;

export function updateUserTest(data: Partial<User>){
  if (data.userName) localStorage.setItem('userName', data.userName);
  if (typeof data.premium === 'boolean') localStorage.setItem('premium', JSON.stringify(data.premium));
  if (data.suggestedPortfolio) localStorage.setItem('suggestedPortfolio', data.suggestedPortfolio);
}

