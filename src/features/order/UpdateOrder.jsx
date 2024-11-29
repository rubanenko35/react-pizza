import React from "react";
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button.jsx";
import { updateOrder } from "../../services/apiRestaurant.js";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  await updateOrder(params.orderId, { priority: true });

  return null;
}
