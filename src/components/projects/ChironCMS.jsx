import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  FileSearch,
  Activity,
  ShieldCheck,
  Lock,
  ListChecks,
  LayoutDashboard
} from "lucide-react";

import quickStart from "/screenshots/chironcms/quickStart.png";
import dashboard from "/screenshots/chironcms/dashboard.png";
import tasks from "/screenshots/chironcms/tasks.png";
import controls from "/screenshots/chironcms/controls.png";
import monitoring from "/screenshots/chironcms/monitoring.png";
import eventHistory from "/screenshots/chironcms/eventHistory.png";
import evidenceLibrary from "/screenshots/chironcms/evidenceLibrary.png";
import controlExample from "/screenshots/chironcms/controlExample.png";
import auditHub from "/screenshots/chironcms/auditHub.png";
import assessment from "/screenshots/chironcms/assessment.png";
import assessmentReview from "/screenshots/chironcms/assessmentReview.png";

export default function ChironCMS() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto text-gray-900">

      {/* Breadcrumb */}
      <div className="text-sm mb-10 font-mono tracking-wide">
        <Link
          to="/#projects"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-blue-900">
        Chiron Compliance Management System
      </h1>

      <p className="font-mono text-sm text-blue-700 mt-2 mb-12">
        React · Firebase · CI/CD · Secure Engineering · GRC
      </p>

      <div className="space-y-20 leading-relaxed">

        {/* Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Overview
          </h2>

          <p className="text-gray-700 text-lg">
            Chiron CMS is a compliance management platform designed to support the
            tracking, auditing, and organization of an organization's security
            compliance efforts. Compliance workflows are driven through the
            completion of framework-based assessments, which serve as the
            foundation for tracking evidence, events, compliance status, security
            controls, and remediation tasks.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            The purpose of this project was to demonstrate the real-world
            application of software design and project management practices
            within a cybersecurity compliance context. Emphasis was placed on
            planning, task tracking, and iterative development, with
            implementation guided by structured workflows, progress monitoring,
            and traceability requirements common to compliance management
            systems.
          </p>
        </section>

        {/* System Architecture */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">
            System Architecture
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            Chiron CMS follows a modular, cloud-based architecture designed to
            support scalability, traceability, and consistent state management
            across compliance workflows. Key architectural components include:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>React frontend with role-based UI visibility</li>
            <li>Firebase Authentication for identity and access management</li>
            <li>Firestore for structured, real-time data storage</li>
            <li>Serverless Cloud Functions for validation and audit logging</li>
            <li>GitHub Actions CI/CD pipelines deploying to Firebase Hosting</li>
          </ul>
        </section>

        {/* Development Workflow */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">
            Development Workflow
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Agile sprint planning and task tracking (Jira)</li>
            <li>Peer-reviewed GitHub pull requests</li>
            <li>Automated linting, testing, and build pipelines</li>
            <li>Production deployments gated by CI/CD checks</li>
          </ul>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">
            Key Features
          </h2>

          <div className="space-y-8 text-lg text-gray-700">

            <div className="flex items-start gap-4">
              <ClipboardCheck className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Compliance Assessments
                </h3>
                <p className="mt-1">
                  Complete structured assessments to evaluate an organization's
                  compliance posture against specific security frameworks
                  (e.g., ISO/IEC 27001:2022).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FileSearch className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Evidence Tracking
                </h3>
                <p className="mt-1">
                  Evidence submitted during assessments is stored centrally and
                  can be filtered, reviewed, and referenced by authorized users
                  to support auditability and verification.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Activity className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Event History
                </h3>
                <p className="mt-1">
                  System-generated events are automatically recorded in real
                  time to provide traceability and non-repudiation across
                  compliance activities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Compliance Monitoring
                </h3>
                <p className="mt-1">
                  Track compliance status across frameworks and domains to
                  monitor progress and identify gaps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Lock className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Security Controls
                </h3>
                <p className="mt-1">
                  Maintain a structured listing of security controls associated
                  with compliance requirements and assessment outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ListChecks className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Organizational Tasks
                </h3>
                <p className="mt-1">
                  Create and track tasks tied to specific compliance domains,
                  controls, or assessment findings to support remediation and
                  accountability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LayoutDashboard className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Dashboard
                </h3>
                <p className="mt-1">
                  A centralized dashboard provides a concise, high-level view of
                  compliance status, activity, and outstanding work.
                </p>
              </div>
            </div>

          </div>
        </section>

          {/* ----------------------------------------------------- */}
          {/* USER INTERFACE */}
          {/* ----------------------------------------------------- */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">
              User Interface
            </h2>

            <p className="text-gray-700 text-lg mb-10">
              The main Chiron interface can be presented through a regular employee flow.
              Upon login through the portal, employees are taken to the QuickStart page.
              This page displays the various modules present in the application as well as
              a short description.
            </p>

            {/* QuickStart */}
            <div className="flex items-center gap-2 my-8">
              <h3 className="text-lg font-semibold text-blue-800 whitespace-nowrap">
                QuickStart
              </h3>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-12">
              <img src={quickStart} className="w-full" />
            </div>

            {/* Dashboard */}
            <div className="flex items-center gap-2 my-8">
              <h3 className="text-lg font-semibold text-blue-800 whitespace-nowrap">
                Dashboard
              </h3>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              The Dashboard module provides employees with a view of the organization's
              compliance metrics and related statistics. Presently, the page does not have
              much data for population, but if further development were to occur, this page
              would present as a customizable dashboard similar to what would be found in
              something like Splunk.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-12">
              <img src={dashboard} className="w-full" />
            </div>

            {/* Organizational Tasks */}
            <div className="flex items-center gap-2 my-8">
              <h3 className="text-lg font-semibold text-blue-800 whitespace-nowrap">
                Organizational Tasks
              </h3>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Tasks are created by administrators and can be linked to a specific framework
              and related control. Created tasks are able to be edited, removed, and
              renamed. The purpose of this module is to assign and create tasks in order to
              organize the completion and compliance related to a specific security
              framework.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-12">
              <img src={tasks} className="w-full" />
            </div>

            {/* Security Controls */}
            <div className="flex items-center gap-2 my-8">
              <h3 className="text-lg font-semibold text-blue-800 whitespace-nowrap">
                Security Controls
              </h3>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              The controls module contains security controls that can be specifically
              linked to a task and compliance framework. Controls are dynamically created
              depending on compliance frameworks added to the organization's Audit Hub.
              This page displays these controls and their status and any evidence attached
              to them.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-12">
              <img src={controls} className="w-full" />
            </div>

            {/* Compliance Monitoring */}
            <div className="flex items-center gap-2 my-8">
              <h3 className="text-lg font-semibold text-blue-800 whitespace-nowrap">
                Compliance Monitoring
              </h3>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              The monitoring page provides employees with an overview of compliance
              completion statuses. To be specific, each framework card contains a
              completion percentage, number of controls, and a simple chart. This page
              displays all compliance frameworks related to the organization and their
              status.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-12">
              <img src={monitoring} className="w-full" />
            </div>

            {/* Event History */}
            <div className="flex items-center gap-2 my-8">
              <h3 className="text-lg font-semibold text-blue-800 whitespace-nowrap">
                Event History
              </h3>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Events such as compliance audit reviews and assessment completions are
              tracked through the Event History module. Events are specifically related
              to Chiron-related operations and contain timestamps, the related framework,
              and which employee completed the audit.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-12">
              <img src={eventHistory} className="w-full" />
            </div>

            {/* Evidence Library */}
            <div className="flex items-center gap-2 my-8">
              <h3 className="text-lg font-semibold text-blue-800 whitespace-nowrap">
                Evidence Library
              </h3>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              The Evidence Library contains all evidence submitted in the completion of
              framework assessments. This allows for the tracking of evidence related to a
              specific control required by a compliance framework. Evidence such as images
              and documents can be accessed for proof of completion.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-6">
              <img src={evidenceLibrary} className="w-full" />
            </div>

            {/* Evidence Submission Example (SUB-HEADER) */}
            <div className="flex items-center gap-2 my-6 ml-4">
              <h4 className="text-base font-semibold text-blue-700 whitespace-nowrap">
                Evidence Submission Example
              </h4>
              <div className="flex-1 h-px bg-blue-300" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              An example is demonstrated below for the evidence submitted in the completion
              of the Information Security Incident Management control, which asks “Is there
              a defined process for reporting, responding to, and learning from security
              incidents?”. This assessment question, answered with a “Yes”, also requires
              an attached document or image proof, which is provided as a PDF document
              titled “Incident Response Plan.pdf”.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-12">
              <img src={controlExample} className="w-full" />
            </div>

            {/* Audit Hub */}
            <div className="flex items-center gap-2 my-8">
              <h3 className="text-lg font-semibold text-blue-800 whitespace-nowrap">
                Audit Hub
              </h3>
              <div className="flex-1 h-px bg-blue-800" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              The primary workhorse of the application is the Audit Hub. The Audit Hub
              populates most of the data within Chiron. This page allows for the creation,
              review, and assessment taking for a specific security framework. A classic
              workflow would be the addition of a framework through a predefined library,
              the opening of the audit to complete the assessment, and lastly the review of
              the audit to ensure correctness and required periodic reviews.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-6">
              <img src={auditHub} className="w-full" />
            </div>

            {/* Assessment Interface (SUB-HEADER) */}
            <div className="flex items-center gap-2 my-6 ml-4">
              <h4 className="text-base font-semibold text-blue-700 whitespace-nowrap">
                Assessment Interface
              </h4>
              <div className="flex-1 h-px bg-blue-300" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Below we see the interface for the assessment related to the CMMC framework.
              This assessment page is made up of questions aligned with the framework’s
              domains and requirements. Employees may answer yes or no, attach evidence,
              and include notes describing the control further.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 mb-6">
              <img src={assessment} className="w-full" />
            </div>

            {/* Assessment Review (SUB-HEADER) */}
            <div className="flex items-center gap-2 my-6 ml-4">
              <h4 className="text-base font-semibold text-blue-700 whitespace-nowrap">
                Assessment Review
              </h4>
              <div className="flex-1 h-px bg-blue-300" />
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Lastly, another employee or auditor may review completed assessments for any
              given framework. This page displays what an employee has answered for a
              question, including the yes/no response, notes, and attached evidence. This
              review step is essential to ensuring accurate compliance reporting.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200">
              <img src={assessmentReview} className="w-full" />
            </div>
          </section>

        {/* ----------------------------------------------------- */}
        {/* CONCLUSION */}
        {/* ----------------------------------------------------- */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Conclusion
          </h2>

          <p className="text-gray-700 text-lg">
            Chiron CMS demonstrates the application of real-world compliance
            management workflows, modern cloud architecture, and disciplined
            project execution. The project reflects enterprise GRC tooling
            patterns and end-to-end software development practices.
          </p>
        </section>

      </div>

      <div className="h-20" />
    </section>
  );
}
