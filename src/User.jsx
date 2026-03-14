

export default function User({ user }) {
  console.log(user);
  const { name, company, address } = user;
  return (
    <div className="card">
      <h5>Name : {name} </h5>
      <h5>Company Name : {company.name} </h5>
      <h5>Address:{address.city} </h5>
    </div>
  );
}
