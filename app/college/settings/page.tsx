import { collegeService } from "@/features/college/settings/services/college.service";
import { usersService } from "@/features/college/settings/services/users.service";
import { billingService } from "@/features/college/settings/services/billing.service";
import { CollegeSettingsView } from "@/features/college/settings/components/college-settings";

export default async function SettingsPage() {
  const [
    profile,
    users,
    billing,
  ] = await Promise.all([
    collegeService.getProfile(),
    usersService.getUsers(),
    billingService.getBilling(),
  ]);

  return (
    <CollegeSettingsView
      data={{
        profile,
        users,
        billing,
      }}
    />
  );
}