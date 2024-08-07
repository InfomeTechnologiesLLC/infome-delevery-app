import { Button } from "primereact/button";

import { RiCornerDownLeftFill } from "@remixicon/react";
import CustomerDetailsSection from "/src/components/delivery/individual/customerDetailsSection";
import DeliveryDetailsSection from "/src/components/delivery/individual/deliveryDetailsSection";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "/src/services/axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { toastOptions } from "/src/services/toast";

import { Skeleton } from "primereact/skeleton";
import ErrorPage from "../../error/page";

function IndividualDelivery(props) {
  let navigate = useNavigate();
  const params = useParams();

  const [Details, setDetails] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Api.get("/get-delivery-full-details", { params: { id: params.id } })
      .then((res) => {
        setDetails(res.data.details);
        setError(false);
        console.log(res);
      })
      .catch((e) => {
        toast.error("Something Went Wrong", toastOptions.error);
        setError(true);
      })
      .finally((e) => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {error ? (
        <ErrorPage />
      ) : (
        <div
          className="normal-page h-full grid grid-rows-10 "
          style={{ height: "90vh" }}
        >
          <div className="row-span-1">
            <Button
              label={<RiCornerDownLeftFill />}
              severity="secondary"
              outlined
              raised
              onClick={() => {
                navigate(-1);
                // window.close();
              }}
            />
          </div>

          {!Loading ? (
            <>
              <CustomerDetailsSection
                className="row-span-3 d-card"
                details={Details}
              />
              <DeliveryDetailsSection
                className="row-span-6 d-card grid grid-rows-8"
                details={Details}
              />
            </>
          ) : (
            <>
              <Skeleton className="row-span-3" height="94%" />

              <Skeleton className="row-span-6" height="98%" />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default IndividualDelivery;
