import * as React from "react";
import BreadcrumbGroup, {
  BreadcrumbGroupProps,
} from "@cloudscape-design/components/breadcrumb-group";
import { useRouter } from "next/navigation";

export interface BreadcrumbsProps {
  items: BreadcrumbGroupProps.Item[];
}

export default function Breadcrumbs(props: Readonly<BreadcrumbsProps>) {
  const router = useRouter();

  const onFollow = React.useCallback(
    (
      e: CustomEvent<
        BreadcrumbGroupProps.ClickDetail<BreadcrumbGroupProps.Item>
      >,
    ) => {
      e.preventDefault();
      router.push(e.detail.href);
    },
    [router],
  );

  return (
    <div>
      <BreadcrumbGroup {...props} onFollow={onFollow} ariaLabel="Breadcrumbs" />
    </div>
  );
}
