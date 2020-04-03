const hello = (salutation = "Hello", audience = "World") => {
  const message = `${salutation} ${audience}!`;
  return message;
};

export default hello;
