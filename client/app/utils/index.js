export function classSet(classMap) {
  const classes = [];
  for (const className in classMap) {
    if (classMap[className]) {
      classes.push(className);
    }
  }
  return classes.join(' ');
}
