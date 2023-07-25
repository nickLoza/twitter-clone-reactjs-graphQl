import Routers from "../../Routers/Routers";
import AsideLeft from "../AsideLeft";
import AsideRight from "../AsideRight";


function Layout() {
	return (
		<div className="relative max-w-[1250px] mx-auto flex justify-center  min-h-[100vh] mx-auto">
			<AsideLeft/>
			<div className="max-w-[80%] md:w-[650px] border-slate-600 border-l-[1px] border-r-[1px] overflow-auto p-5 px-0">
				<Routers/>
			</div>
			<AsideRight/>
		</div>
	)
}

export default Layout;