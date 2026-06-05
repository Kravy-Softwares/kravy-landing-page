import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function ProductBreadcrumb({ brand, name }) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList className="text-xs text-zinc-400">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="hover:text-indigo-600 transition-colors">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/eyewear" className="hover:text-indigo-600 transition-colors">Eyewear</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/eyewear/sunglasses" className="hover:text-indigo-600 transition-colors">Sunglasses</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-zinc-700 font-medium truncate max-w-[160px]">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}