export const users = [
  {
    id: 1,
    name: "Liya Gellem",
    email: "liya@gmail.com",
    phone: "0821234567",
    cardNumber: "1001",
    status: "Active",
    balance: 250,
  },
  {
    id: 2,
    name: "Tebza Nkosi",
    email: "tebza@gmail.com",
    phone: "0837654321",
    cardNumber: "1002",
    status: "Active",
    balance: 180,
  },
  {
    id: 3,
    name: "Sihle Ngena",
    email: "sihle@gmail.com",
    phone: "0845558899",
    cardNumber: "1003",
    status: "Suspended",
    balance: 0,
  },
];

export const drivers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@gmail.com",
    bus: "BUS-102",
    shift: "Morning",
    complaints: 2,
    status: "Active",
  },
  {
    id: 2,
    name: "David Lee",
    email: "david@gmail.com",
    bus: "BUS-205",
    shift: "Night",
    complaints: 0,
    status: "Active",
  },
];

export const buses = [
  {
    id: 1,
    number: "BUS-102",
    route: "Downtown - Airport",
    capacity: 50,
    driver: "John Smith",
    status: "Active",
  },
  {
    id: 2,
    number: "BUS-205",
    route: "City Center - University",
    capacity: 45,
    driver: "David Lee",
    status: "Active",
  },
  {
    id: 3,
    number: "BUS-310",
    route: "Station - Mall",
    capacity: 55,
    driver: "Not Assigned",
    status: "Maintenance",
  },
];

export const schedules = [
  {
    id: 1,
    bus: "BUS-102",
    driver: "John Smith",
    route: "Downtown - Airport",
    departure: "08:00",
    arrival: "09:30",
    status: "Completed",
  },
  {
    id: 2,
    bus: "BUS-205",
    driver: "David Lee",
    route: "University Route",
    departure: "10:00",
    arrival: "11:15",
    status: "Scheduled",
  },
];

export const complaints = [
  {
    id: 1,
    passenger: "Michael Brown",
    driver: "John Smith",
    bus: "BUS-102",
    issue: "Late arrival",
    date: "2026-01-15",
    status: "Pending",
  },
  {
    id: 2,
    passenger: "Sarah Wilson",
    driver: "David Lee",
    bus: "BUS-205",
    issue: "Driver behaviour",
    date: "2026-01-10",
    status: "Resolved",
  },
];

export const stats = {
  users: users.length,
  drivers: drivers.length,
  buses: buses.length,
  trips: schedules.filter(
    (schedule) => schedule.status === "Completed"
  ).length,

  activeBuses: buses.filter(
    (bus) => bus.status === "Active"
  ).length,

  maintenanceBuses: buses.filter(
    (bus) => bus.status === "Maintenance"
  ).length,

  inactiveBuses: buses.filter(
    (bus) => bus.status === "Inactive"
  ).length,

  scheduledTrips: schedules.length,

  pendingComplaints: complaints.filter(
    (complaint) => complaint.status === "Pending"
  ).length,

  resolvedComplaints: complaints.filter(
    (complaint) => complaint.status === "Resolved"
  ).length,
};