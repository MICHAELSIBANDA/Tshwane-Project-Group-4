const DriversTable = ({ drivers, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Bus</th>
          <th>Shift</th>
          <th>Complaints</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {drivers.length === 0 ? (
          <tr>
            <td colSpan="7" style={{ textAlign: "center" }}>
              No drivers found
            </td>
          </tr>
        ) : (
          drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.bus}</td>
              <td>{driver.shift}</td>
              <td>{driver.complaints}</td>
              <td>{driver.status}</td>
              <td>
                <button className="btn btn-edit" onClick={() => onEdit(driver)}>
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => onDelete(driver.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DriversTable;