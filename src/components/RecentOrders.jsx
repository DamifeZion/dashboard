import React from "react";

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className="text-muted">
          <tr>
            <td className="no-border-top">Foldable Mini Drone</td>
            <td className="no-border-top">85631</td>
            <td className="no-border-top">Due</td>
            <td className="warning no-border-top">Pending</td>
            <td className="no-border-top">Details</td>
          </tr>

          <tr>
            <td>LARVENDER KF102 Drone</td>
            <td>36378</td>
            <td>Refunded</td>
            <td className="danger">Declined</td>
            <td>Details</td>
          </tr>

          <tr>
            <td>Ruko F11 Pro Drone</td>
            <td>49347</td>
            <td>Due</td>
            <td className="warning">Pending</td>
            <td>Details</td>
          </tr>

          <tr>
            <td>Drone with Camera Drone</td>
            <td>96996</td>
            <td>Paid</td>
            <td>Delivered</td>
            <td>Details</td>
          </tr>

          <tr>
            <td>Gps 4k Drone</td>
            <td>22821</td>
            <td>Paid</td>
            <td>Delivered</td>
            <td>Details</td>
          </tr>

          <tr>
            <td>DJI Air 2S</td>
            <td>81475</td>
            <td>Due</td>
            <td className="warning">Pending</td>
            <td>Details</td>
          </tr>

          <tr>
            <td className="padding-bottom">Lozenge Drone</td>
            <td className="padding-bottom">00482</td>
            <td className="padding-bottom">Paid</td>
            <td className="padding-bottom">Delivered</td>
            <td className="padding-bottom">Details</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
