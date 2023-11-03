import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

function BreadCrumb() {
  return (
    <Breadcrumb className="h-13 p-3">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default BreadCrumb;
