export const change = (e, body, setBody) => {
  const { name, value } = e.target;

  console.log(name, value, body);
  setBody({
    ...body,
    [name]: value,
  });
};
