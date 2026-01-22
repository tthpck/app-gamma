export function pointsCheck(updatedPoints:number){
  if (updatedPoints >= 70) return "Master";
  if (updatedPoints >= 50 && updatedPoints < 70)
    return "Advanced";
  if (updatedPoints >= 40 && updatedPoints < 50)
    return "Essential";
  if (updatedPoints < 40) return "Basic";
}