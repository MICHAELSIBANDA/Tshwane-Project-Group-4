const BusTable = ({ buses, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Bus Number</th>
          <th>Route</th>
          <th>Capacity</th>
          <th>Driver</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {buses.length === 0 ? (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No buses found
            </td>
          </tr>
        ) : (
          buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.number}</td>
              <td>{bus.route}</td>
              <td>{bus.capacity}</td>
              <td>{bus.driver}</td>
              <td>{bus.status}</td>
              <td>
                <button className="btn btn-edit" onClick={() => onEdit(bus)}>
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => onDelete(bus.id)}
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

export default BusTable;