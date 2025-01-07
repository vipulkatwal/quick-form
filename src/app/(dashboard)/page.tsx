import { GetFormStats } from "../../../actions/form";
import { LuView } from "react-icons/lu";
import { ReactNode, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";

export default function Home() {
	return (
		<div className="container pt-4">
			<Suspense fallback={<StatsCards loading={true} />}>
				<CardStatsWrapper />
			</Suspense>
			<Separator className="my-6">
				<h2 className="text-4xl font-bold col-span-2">Your Forms</h2>
			</Separator>
		</div>
	);
}

async function CardStatsWrapper() {
	try {
		const stats = await GetFormStats();
		return <StatsCards loading={false} data={stats} />;
	} catch {
		return <StatsCards loading={false} data={undefined} />;
	}
}

interface StatsCardsProps {
	data?: Awaited<ReturnType<typeof GetFormStats>>;
	loading: boolean;
}

function StatsCards(props: StatsCardsProps) {
	const { data, loading } = props;

	return (
		<div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			<StatsCard
				title="Total Visits"
				icon={<FaWpforms className="text-blue-600" />}
				helperText="All time form visits"
				value={data?.visits.toLocaleString() || ""}
				loading={loading}
				className="shadow-md shadow-blue-600"
			/>
			<StatsCard
				title="Total Submissions"
				icon={<HiCursorClick className="text-yellow-600" />}
				helperText="All time form submissions"
				value={data?.submissions.toLocaleString() || ""}
				loading={loading}
				className="shadow-md shadow-yellow-600"
			/>
			<StatsCard
				title="Submission Rate"
				icon={<LuView className="text-green-600" />}
				helperText="Visits that result in form submission"
				value={`${data?.submissionRate.toFixed(1)}%` || ""}
				loading={loading}
				className="shadow-md shadow-green-600"
			/>
			<StatsCard
				title="Bounce Rate"
				icon={<TbArrowBounce className="text-red-600" />}
				helperText="Visits that leave without interacting"
				value={`${data?.bounceRate.toFixed(1)}%` || ""}
				loading={loading}
				className="shadow-md shadow-red-600"
			/>
		</div>
	);
}
