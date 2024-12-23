import MainLayout from "@/components/shared/MainLayout";

export default function DashboardLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return(
        <MainLayout>
            {children}
        </MainLayout>
    )
}