import React from "react";
import "../assets/css/Sidebar.css";
import SidebarList from "../component/SidebarList";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppsIcon from "@material-ui/icons/Apps";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import { ReactComponent as IconAwesomeBullhorn } from "../assets/svg/icon-awesome-bullhorn.svg";
import { ReactComponent as IconRocket } from "../assets/svg/ionic-ios-rocket.svg";
import { ReactComponent as IconLeads } from "../assets/svg/awesome-user-secret.svg";
import { ReactComponent as IconCross } from "../assets/svg/icon-awesome-crosshairs.svg";
import { ReactComponent as AwesomeBell } from "../assets/svg/awesome-bell.svg";
import { ReactComponent as AwesomeEdit } from "../assets/svg/awesome-edit.svg";
import { ReactComponent as IconLink } from "../assets/svg/external-link-square-alt.svg";
import { ReactComponent as AwesomeFile } from "../assets/svg/awesome-file.svg";
import { ReactComponent as FilePdf } from "../assets/svg/file-pdf.svg";
import { ReactComponent as MoneyBill } from "../assets/svg/money-bill-wave-alt.svg";
import { ReactComponent as ObjectUngroup } from "../assets/svg/object-ungroup.svg";
import { ReactComponent as AwesomeQuestion } from "../assets/svg/awesome-question.svg";
import { ReactComponent as TimesCircle } from "../assets/svg/times-circle.svg";
import { ReactComponent as IosBriefcase } from "../assets/svg/ios-briefcase.svg";
import { ReactComponent as PieChart } from "../assets/svg/pie-chart.svg";
import { ReactComponent as IosSetting } from "../assets/svg/ios-settings.svg";

function Sidebar() {
  return (
    <div className="d-flex sidebar slimscroll ">
      <ul className="sidebar-items list-unstyled position-relative">
        <li>
          <span>Main</span>
        </li>
        <li>
          <SidebarList icon={<DashboardIcon />} title="Dashboard" />
        </li>
        <li>
          <SidebarList icon={<AppsIcon />} title="Apps" />
        </li>
        <li>
          <span>Employees</span>
        </li>
        <li>
          <SidebarList icon={<PersonIcon />} title="Employees" />
        </li>
        <li>
          <SidebarList icon={<PeopleIcon />} title="Clients" />
        </li>
        <li>
          <SidebarList icon={<IconRocket />} title="Projects" />
        </li>
        <li>
          <SidebarList icon={<IconLeads />} title="Leads" />
        </li>
        <li>
          <SidebarList icon={<ConfirmationNumberIcon />} title="Tickets" />
        </li>

        <li>
          <span>HR</span>
        </li>
        <li>
          <SidebarList icon={<AwesomeFile />} title="Accounts" />
        </li>
        <li>
          <SidebarList icon={<MoneyBill />} title="Payroll" />
        </li>
        <li>
          <SidebarList icon={<FilePdf />} title="Policies" />
        </li>
        <li>
          <SidebarList icon={<PieChart />} title="Reports" />
        </li>
        <li>
          <span>Performance</span>
        </li>
        <li>
          <SidebarList icon={<IconCross />} title="Goals" />
        </li>
        <li>
          <SidebarList icon={<AwesomeEdit />} title="Training" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Promotion" />
        </li>
        <li>
          <SidebarList icon={<IconLink />} title="Resignation" />
        </li>
        <li>
          <SidebarList icon={<TimesCircle />} title="Termination" />
        </li>

        <li>
          <span>Administration</span>
        </li>
        <li>
          <SidebarList icon={<ObjectUngroup />} title="Assets" />
        </li>
        <li>
          <SidebarList icon={<IosBriefcase />} title="Jobs" />
        </li>
        <li>
          <SidebarList icon={<AwesomeQuestion />} title="Knowledgbase" />
        </li>
        <li>
          <SidebarList icon={<AwesomeBell />} title="Activities" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="User" />
        </li>
        <li>
          <SidebarList icon={<IosSetting />} title="Setting" />
        </li>
        <li>
          <span>Pages</span>
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Profile" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Authenticaion" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Error Pages" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Subscriptions" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Pages" />
        </li>
        <li>
          <span>UI Interface</span>
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Componets" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Forms" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Tables" />
        </li>
        <li>
          <span>Extras</span>
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Documentation" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Change Log" />
        </li>
        <li>
          <SidebarList icon={<IconAwesomeBullhorn />} title="Multi Level" />
        </li>
      </ul>
      <div className="slimscrollbar"></div>
    </div>
  );
}

export default Sidebar;
