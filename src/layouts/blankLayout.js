import React from "react";
import { renderRoutes } from "react-router-config";

const layout = ({ route }) => <>{renderRoutes(route.routes)}</>;

export default layout;