/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  let area, perimeter;
  let result = [];
  for(const index in literals){
      if(literals[index].includes('area')){
          area = expressions[index];
      }
      if(literals[index].includes('perimeter')){
          perimeter = expressions[index];
      }
  }
  function s(sign, a, p){
      return (p + sign*(Math.sqrt(p**2 - (16*a))))/4
  }
  result.push(s(1, area, perimeter));
  result.push(s(-1, area, perimeter));
  result.sort((a,b) => a-b);
  return result;
}