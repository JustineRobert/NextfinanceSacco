import next from "next"
import { auth } from "@clerk/nextjs"; 
function Dashboard() {
  const { userId } = auth();
  return (
    <div>
     
    </div>
  )
}

export default Dashboard;
