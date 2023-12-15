// course functionality

const jobRolesCA = [
    [
      "Public Practice - Practicing as a Sole Proprietor:",
      "Chartered Accountants who choose to practice as a sole proprietor have the flexibility to work independently and manage their own time and workload. Moreover, they have the opportunity to build their own client base, and can provide a personalized approach to serving their clients' needs. ",
      " Practicing as a Partner in a Firm - Chartered Accountants who choose to practice as a partner in a firm can benefit from the support and resources of their colleagues. In Addition,they can work together to provide a wider range of services, and can draw on the expertise of their partners to offer a more comprehensive approach to serving clients.",
      "Corporate Sector - Financial Management:",
      "In this role, Chartered Accountants are responsible for overseeing the financial operations of a company, including budgeting, forecasting, and financial reporting. Also, they may also be involved in fundraising, investment management, and financial analysis.",
      "Internal Audit - Chartered Accountants working in internal audit are responsible for reviewing and assessing a company's financial and operational processes, identifying areas of risk, and making recommendations for improvement.",
      "Government sector - Jobs in Government-Owned Corporations:",
      "Chartered Accountants can work in government-owned corporations, such as the Oil and Natural Gas Corporation, where they may be responsible for financial planning, budgeting, and financial reporting.",
      "Jobs in Government Departments - CA can also find employment in government departments, such as the Ministry of Finance, where they may be responsible for financial policy development and implementation.",
    ],
    [
      "Chartered Accountants in India can also explore international opportunities, such as working for multinational corporations, international accounting firms, or international financial institutions. Additionally, they can use their expertise to serve clients globally, and can gain valuable experience and exposure to different cultures and business practices.",
      "Financial Management - Investment Banking:",
      "Investment bankers work with clients to raise capital, provide advice on strategic financial decisions, and help businesses navigate the process of going public. Chartered Accountants who have a strong understanding of financial markets, securities regulation, and risk management can excel in this field.",
      "Equity Research - Equity research analysts use financial data, market analysis, and industry knowledge to identify investment opportunities and provide recommendations to clients. Along with this, Chartered Accountants with a strong background in financial analysis, data interpretation, and critical thinking can excel in this field.",
      "Corporate Finance - Mergers and Acquisitions:",
      "Mergers and acquisitions (M&A) is a fast-paced and exciting field in which Chartered Accountants can play a critical role. Moreover, they can use their financial analysis and valuation skills to help companies make informed decisions about potential M&A transactions, and can assist with the due diligence process, negotiating terms, and ensuring regulatory compliance.",
      "Corporate Advisory- Chartered Accountants with a strong background in financial analysis and strategic planning can excel in corporate advisory roles. In this role, they can help companies make informed decisions about investments, financing options, and strategic initiatives, and can provide guidance on a wide range of corporate finance issues.",
      "Risk Management - Enterprise Risk Management:",
      "Enterprise risk management (ERM) involves assessing and managing an organization's risk exposure, including financial, operational, and reputational risk. Chartered Accountants with expertise in risk management can excel in this field, helping organizations to identify, assess, and mitigate risk.",
      "Internal Audit - Internal auditors play a critical role in ensuring the accuracy and integrity of financial information, and assessing the effectiveness of internal controls. Chartered Accountants with strong auditing skills can excel in this field, helping organizations to identify and address areas of risk and ensure compliance with regulatory requirements.",
      "Taxation - Tax Consultancy:",
      "Chartered Accountants with expertise in tax law and compliance can provide valuable advice and guidance to clients on a wide range of tax-related issues, including tax planning, tax compliance, and tax dispute resolution.",
      "Tax Planning - Tax planning is a critical area of financial management, and Chartered Accountants can play a critical role in helping clients to minimize their tax liabilities and optimize their financial positions.",
      "Consulting - Consulting is a growing and dynamic field, and Chartered Accountants with a broad range of skills and expertise can excel in this area. They can use their analytical and problem-solving skills, financial expertise, and business acumen to help organizations achieve their goals and overcome challenges.",
      "Data Analytics - Data analytics is a growing field, and Chartered Accountants with expertise in data analysis, financial modeling, and business intelligence can play a critical role in helping organizations make informed decisions. Chartered Accountants with strong technical skills, including programming languages such as Python and R, can help organizations to collect, process, and analyze large amounts of data to uncover new insights and opportunities.",
      "Blockchain and Cryptocurrency - The blockchain and cryptocurrency space is rapidly evolving, and Chartered Accountants with expertise in these areas can play a critical role in helping organizations navigate this complex and exciting landscape. Chartered Accountants with a strong understanding of financial regulation and security can help organizations to establish and maintain secure and compliant blockchain-based systems and processes.",
      "Digital Transformation - Digital transformation is transforming the business landscape, and Chartered Accountants with expertise in digital technology, data analysis, and process improvement can play a critical role in helping organizations to adapt and thrive in this rapidly changing environment. Chartered Accountants with strong technical skills, including digital project management, cloud computing, and data analysis, can help organizations to implement digital transformation initiatives and capitalize on the opportunities presented by emerging technologies.",
    ],
  ];
  const jobRolesCMA = [
    [
      "CMD - Chief Managing Director, CEO - Chief Executive Officer, COO - Chief Operating Office, CFO - Chief Financial Officer, Director - Finance ¤ President - Finance , Vice President - Finance ¤ Head of Finance , Strategic Head , Cost Advisor , Finance Controller , Cost Controller , Risk Manager ,Business Analyst , Research Analyst , Dean/ Professor of Finance",
      "Government Jobs - Indian Cost Accounting Services (ICAS) , Indian Administrative Services (IAS) , Indian Revenue Services (IRS) , Indian Foreign Services (IFS) , Indian Economic Services (IES) , Indian Audit & Accounts Services (IAAS), etc.",
    ],
    [
      "Public Sector Undertakings , Infrastructure, Logistic and Automobile Companies, Manufacturing, FMCG, Engineering, Hospitality, Power Sector & Telecommunication , BFSI Sector , IT/IT enabled Services ¤ Healthcare & Pharmaceutical Companies , Big Four and other reputed Consultancy Firms",
    ],
  ];
  
  const papersCA = [
    [
      "Papers at Foundation Level ",
      "Paper 1 Accounting (100 marks) ",
      "Paper 2 Business Laws (100 marks) ",
      "Paper 3 Quantitative Aptitude (100 marks)- Business Mathematics - Logical reasoning - Statistics ",
      "Paper 4 Business Economics (100 marks)",
    ],
    [
      "Papers at Intermediate Level Group I",
      "Paper 1 Advanced Accounting (100 marks) ",
      "Paper 2 Corporate and Other Laws (100 marks) ",
      "Paper 3 Taxation - Section A - Income-tax Law (50 Marks), Section B - Goods and Services Tax (GST) (50 Marks) ",
      "Papers at Intermediate Level Group II ",
      "Paper 4 Cost and Management Accounting (100 marks) ",
      "Paper 5 Auditing and Ethics (100 marks) ",
      "Paper 6A Financial Management (50 Marks) ",
      "Paper 6B Strategic Management (50 Marks)",
    ],
    [
      "Papers at Final Level Group I",
      "Paper 1 Financial Reporting (100 marks) ",
      "Paper 2 Advanced Financial Management (100 marks) ",
      "Paper 3 Advanced Auditing, Assurance (100 marks) and Professional Ethics ",
      "Papers at Final Level Group  II",
      "Paper 4 Direct Tax Laws and International Taxation (100 marks) ",
      "Paper 5 Indirect Tax Laws (100 marks) ",
      "Paper 6 Integrated Business Solutions (100 marks) ",
    ],
  ];
  const papersCMA = [
    [
      "FOUNDATION	COURSE ",
      "P1	- Fundamentals of Business Laws and Business Communication (FBLC) ",
      "P2	- Fundamentals of Financial and Cost Accounting (FFCA)",
      "P3	- Fundamentals of Business Mathematics and Statistics (FBMS) ",
      "P4	- Fundamentals of Business Economics and Management (FBEM)",
    ],
    [
      "INTERMEDIATE COURSE GROUP -I ",
      "P5	- Business Laws and Ethics (BLE) ",
      "P6	- Financial Accounting (FA) ",
      "P7	- Direct and Indirect Taxation (DITX) ",
      "P8	- Cost Accounting (CA) ",
      "INTERMEDIATE COURSE GROUP -II ",
      "P9	- Operations Management and Strategic Management (OMSM) ",
      "P10	- Corporate Accounting and Auditing (CAA) ",
      "P11	- Financial Management and Business Data Analytics (FMDA) ",
      "P12	- Management Accounting (MA)	",
    ],
    [
      "FINAL COURSE GROUP-III",
      " P13	- Corporate and Economic Laws (CEL) ",
      "P14	- Strategic Financial Management (SFM) ",
      "P15	- Direct Tax Laws and International Taxation (DIT) ",
      "P16	- Strategic Cost Management (SCM) ",
      "FINAL COURSE GROUP-IV ",
      "P17	- Cost and Management Audit (CMAD) ",
      "P18	- Corporate Financial Reporting (CFR) ",
      "P19	- Indirect Tax Laws and Practice (ITLP) ",
      "ELECTIVES ",
      "P20A:	Strategic Performance Management and Business Valuation (SPMBV) ",
      "P20B:	Risk Management in Banking and Insurance (RMBI) ",
      "P20C:	Entrepreneurship and Startup (ENTS)",
      "(Note: Students	will be required	to select any one of three Elective Papers (20A/20B/20C) at the	time of enrolment for the Final	Course)",
    ],
  ];
  
  const eligibilityCMA = [
    [
      "A candidate should have passed Class 10 or equivalent from a recognized Board or Institution; Or,",
      "Passed the Senior Secondary School Examination under the 10+2 scheme of a recognized Board or an Examination recognized by the Central Government as equivalent thereto or has passed the National Diploma in Commerce Examination held by the All India Council for Technical Education or any State Board of Technical Education under the authority of the said All India Council, or the Diploma in Rural Service Examination conducted by the National Council of Rural Higher Education.",
      "Any Candidate who has passed the Foundation examination conducted by the Institute of Company Secretaries of India will be exempted from Foundation Course & vice versa; Or,",
      "Any Candidate who has passed the Intermediate Examination (by whatever name called) conducted by the Institute of Chartered Accountants of India will be exempted from Foundation Course",
    ],
    [
      "Passed Senior Secondary School Examination / Higher Secondary Examination (10+2) and Foundation Course of the Institute of Cost Accountants of India or qualified the Foundation (Entry Level) Part I Examination of Certificate in Accounting Technicians (CAT) Course of the Institute of Cost Accountants of India or Degree examination of any recognized University or Pursuing Engineering Course (having completed 2nd year/Semester IV/ equivalent) or Qualified Engineers or equivalent in any subject other than music, dancing, photography, painting & sculpture and the likes.",
    ],
  ];
  
  const entryRoutesCA = [
    [
      "Route I: Foundation Course",
      "This is an entry to the CA Course for the candidates who have appeared for class XII examinations. Under this route, a Class X passed student may register himself with the Board of Studies (BoS) of the Institute for the Foundation Course.",
      "Route-II Direct ",
      "Entry The ICAI allows the following candidates to enter directly to its Intermediate Course",
      "Commerce Graduates/Post-Graduates (with minimum 55% marks) or Other Graduates/ Post-Graduates (with minimum 60% marks) and Intermediate level passed candidates of Institute of Company Secretaries of India and Institute of Cost Accountants of India.",
    ],
  ];
  
  const btnCMAPaperFoundation = document.getElementById("cma-paper-foundation");
  const btnCMAEntryFoundation = document.getElementById("cma-entry-foundation");
  const btnCMAJobFoundation = document.getElementById("cma-job-foundation");
  const btnCMAInterFoundation = document.getElementById("cma-inter-foundation");
  const tabContent = document.querySelector(".tab-content");
  const list = document.createElement("ul");
  
  tabContent.append(list);
  function btnHighlighted(btn) {
    btnCMAPaperFoundation.className = "";
    btnCMAEntryFoundation.className = "";
    btnCMAJobFoundation.className = "";
    btnCMAInterFoundation.className = "";
    btn.className = "active";
  }
  
  function displayContent(items) {
    let listContent = "";
    for (const item of items) {
      listContent += `<li>${item}</li>`;
    }
    list.innerHTML = listContent;
  }
  
  function handleClick(e) {
    btnHighlighted(e.target);
     if (e.target.id === "cma-paper-foundation") {
      displayContent(papersCMA[0]);
    } else if (e.target.id === "cma-entry-foundation") {
      displayContent(eligibilityCMA[0]);
    } else if (e.target.id === "cma-job-foundation") {
      displayContent(jobRolesCMA[0]);
    } else if (e.target.id === "cma-inter-foundation") {
      displayContent(jobRolesCMA[1]);
    }
  }
  
  btnCMAPaperFoundation.addEventListener("click", handleClick);
  btnCMAEntryFoundation.addEventListener("click", handleClick);
  btnCMAJobFoundation.addEventListener("click", handleClick);
  btnCMAInterFoundation.addEventListener("click", handleClick);
  