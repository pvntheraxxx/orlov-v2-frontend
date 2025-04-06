import React from "react";
import { DeliveryMap } from "../../components/deliveryMap";
import { DeliverySection } from "../../components/sections";
import { useResponsive } from "../../hooks/useResponsive";

const DeliveryPage = () => {
  const { isXs, isSm, isLgSm } = useResponsive();
  const isMobile = isXs || isSm || isLgSm;

  return (
    <>
      <DeliverySection />
      {/* <DeliveryMap /> */}
    </>
  );
};

export default DeliveryPage;
