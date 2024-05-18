export function calculateAge(birthDate: string): number {
   const [day, month, year] = birthDate.split('/').map(Number);

   const birthDateObj = new Date(year, month - 1, day);

   const today = new Date();

   let age = today.getFullYear() - birthDateObj.getFullYear();

   const currentMonth = today.getMonth();
   const currentDay = today.getDate();

   if (
      currentMonth < month - 1 ||
      (currentMonth === month - 1 && currentDay < day)
   ) {
      age--;
   }

   return age;
}
