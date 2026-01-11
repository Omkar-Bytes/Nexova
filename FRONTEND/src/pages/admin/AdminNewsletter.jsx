import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./AdminNewsletter.css";

const AdminNewsletter = () => {
  const { token } = useAuth();
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/admin/newsletter",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSubs(res.data);
      } catch (err) {
        console.error("Failed to fetch newsletter subscribers", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubs();
  }, [token]);

  if (loading) return <p>Loading subscribers...</p>;

  return (
    <div className="admin-newsletter">
      <h2>Newsletter Subscribers</h2>

      {subs.length === 0 ? (
        <p>No subscribers yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subs.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.email}</td>
                <td>
                  {new Date(s.subscribedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminNewsletter;
