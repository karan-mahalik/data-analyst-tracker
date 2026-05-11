import DashboardCards from "../components/DashboardCards/DashboardCards";
import DailyForm from "../components/DailyForm/DailyForm";
import GoalSection from "../components/GoalSection/GoalSection";
import Checklist from "../components/Checklist/Checklist";
import ProgressSummary from "../components/ProgressSummary/ProgressSummary";
import RecentLogs from "../components/RecentLogs/RecentLogs";

function Dashboard(props) {

    return (
        <div className="dashboard-grid">

            <div className="left-grid">

                <DailyForm
                    formData={props.formData}
                    setFormData={props.setFormData}
                    handleSubmit={props.handleSubmit}
                    alreadyUpdatedToday={
                        props.alreadyUpdatedToday
                    }
                />
                <div className="bottom-grid">

                    <Checklist
                        checklist={props.checklist}
                        setChecklist={props.setChecklist}
                    />

                    <ProgressSummary
                        totalHours={props.totalHours}
                        totalLogs={props.logs.length}
                    />

                </div>

            </div>

            <div className="right-grid">

                <GoalSection
                    goals={props.goals}
                    setGoals={props.setGoals}
                />

                <RecentLogs
                    logs={props.logs}
                />

            </div>

        </div>
    );
}

export default Dashboard;