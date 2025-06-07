
import DashboardLayout from './DashboardLayout';
import DashboardClientContent from './DashboardClientContent';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardClientContent />
    </DashboardLayout>
  );
}
