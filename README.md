<h1>CEP now supported by Bridge!</h1>
<p>Common Extensibility Platform CEP (formerly CSXS - Creative Suite Extensible Services) is a shared technology
    which provides a rich platform to create and run HTML5-based extensions across point products. The
    extensions created using CEP framework, extend the functionality of the host application(eg. Bridge,
    PhotoShop) that they run in, using HTML5, JavaScript, ExtendScript, and CSS.<br />Bridge is now supporting
    CEP and Users can create CEP extensions for Bridge as well.</p>
<h1>Get started with development.</h1>
<p><strong>What all is needed</strong></p>
<ul>
    <li>Adobe Bridge Version 8.0 and above.</li>
    <li>Bridge Sample Project.(<a href="https://github.com/siddharthsingh89/BridgeSamples">https://github.com/siddharthsingh89/BridgeSamples</a>)</li>
	    <li>The <a href="https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD/4.0.7/">ZXPSignCmd signing utility </a> to sign the extensions and create signed .zxp bundles for Add-Ons
        or direct distribution.&nbsp;</li>
</ul>
<p><strong>Steps</strong></p>
<ul>
    <li>Download\Clone the repository.</li>
    <li>Add PlayerDebugMode setting for quick testing of unsigned applications during development. Refer
        to <strong>Debugging section</strong>&nbsp; below for detailed instructions.</li>
    <li>Copy the samples to &lt;CEP Extension folder&gt; and Update it as your own extension. Refer to <strong>Extension Folders</strong>        section below for CEP Extensions locations on Win and Mac.</li>
    <li>Launch Bridge and Go to Window Menu -&gt; Extensions and you can find the list of extensions there.</li>
    <li>Sign and package the Extension.</li>
</ul>
<h1>What's different in Bridge vs Other Point Products</h1>
<h3><strong>Extension Types Supported By Bridge</strong></h3>
<p>Currently there are three types of CEP extensions that can be created - Embedded, Modal Dialog, Modeless
    Dialog.</p>
<p>The <strong>Embedded</strong> type of extension behaves like any other application panel. It can be docked,
    participates in workspaces, has fly-out menus, and is re-opened at start-up if open at shutdown.
    The corresponding type identifier in the extension manifest is <strong>Embedded</strong>.</p>
<p>The <strong>Modal Dialog</strong> type opens a new window and forces the user to interact with the window
    before returning control to the host application. The corresponding type identifier in the extension
    manifest is <strong>ModalDialog</strong>.</p>
<p>The <strong>Modeless</strong> Dialog type opens a new window but doesn't force the user to interact with
    it. The corresponding type identifier in the extension manifest is <strong>Modeless</strong>.</p>
<p>&nbsp;</p>
<h3>CEP Runtime&nbsp;</h3>
<p>Bridge will support CEP 7.0</p>
<h1>Important Manifest Changes for Bridge CEP Extensions</h1>
<ul>
    <li>Correct ExtensionManifest Version should be used in the manifest.<br /><br />&lt;ExtensionManifest
        xmlns:xsi=&quot;<a href="http://www.w3.org/2001/XMLSchema-instance">http://www.w3.org/2001/XMLSchema-instance</a>&quot;
        ExtensionBundleId=&quot;com.adobe.Samples2&quot; ExtensionBundleVersion=&quot;1.0&quot; <strong>Version=&quot;7.0&quot;</strong>&gt;<br
        /><br /></li>
    <li>&nbsp;Make sure to use the correct HostID and point product version for Bridge in the manifest.xml
        of the extension.<br />
        <p>&lt;HostList&gt;<br />&lt;Host Name=&quot;KBRG&quot; Version=&quot;[8.0,8.9]&quot;/&gt;<br />&lt;/HostList&gt;<br
            />eg. This will support Bridge version 8.0 up to, and including, 8.9.</p>
    </li>
    <li>Make sure correct CEP runtime version is used.<br />
        <p>&lt;RequiredRuntimeList&gt;<br />&lt;RequiredRuntime Name=&quot;CSXS&quot; Version=&quot;7.0&quot;/&gt;<br
            />&lt;/RequiredRuntimeList&gt;</p>
    </li>
</ul>


<h1>Important Manifest Changes for Bridge CEP Extensions</h1>
<ul>
    <li>Correct ExtensionManifest Version should be used in the manifest.<br /><br />&lt;ExtensionManifest
        xmlns:xsi=&quot;<a href="http://www.w3.org/2001/XMLSchema-instance">http://www.w3.org/2001/XMLSchema-instance</a>&quot;
        ExtensionBundleId=&quot;com.adobe.Samples2&quot; ExtensionBundleVersion=&quot;1.0&quot; <strong>Version=&quot;7.0&quot;</strong>&gt;<br
        /><br /></li>
    <li>&nbsp;Make sure to use the correct HostID and point product version for Bridge in the manifest.xml
        of the extension.<br />
        <p>&lt;HostList&gt;<br />&lt;Host Name=&quot;KBRG&quot; Version=&quot;[8.0,8.9]&quot;/&gt;<br />&lt;/HostList&gt;<br
            />eg. This will support Bridge version 8.0 up to, and including, 8.9.</p>
    </li>
    <li>Make sure correct CEP runtime version is used.<br />
        <p>&lt;RequiredRuntimeList&gt;<br />&lt;RequiredRuntime Name=&quot;CSXS&quot; Version=&quot;7.0&quot;/&gt;<br
            />&lt;/RequiredRuntimeList&gt;</p>
    </li>
</ul>
<h1>Sample Manifest XML for Bridge&nbsp;</h1>
<p>&nbsp;</p>

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ExtensionBundleId="com.adobe.Samples" ExtensionBundleVersion="1.0" Version="7.0"> 
    <ExtensionList>
        <Extension Id="BridgeHelpPage" Version="1.0"/>  
			
    </ExtensionList>
    <ExecutionEnvironment>
        <HostList>
            <Host Name="KBRG" Version="[8.0,8.9]" />
        </HostList>
        <LocaleList>
            <Locale Code="All"/>
        </LocaleList>
        <RequiredRuntimeList>
            <RequiredRuntime Name="CSXS" Version="7.0"/>
        </RequiredRuntimeList>
    </ExecutionEnvironment>
    <DispatchInfoList>      
        <Extension Id="BridgeHelpPage">
            <DispatchInfo>
                <Resources>
                    <MainPath>./index.html</MainPath>		
					
                </Resources>
                <Lifecycle>
                    <AutoVisible>true</AutoVisible>
                </Lifecycle>
                <UI>
                    <Type>Embedded</Type>
                    <Menu>Bridge Help</Menu>
                    <Geometry>
                        <Size>
                            <Height>580</Height>
                            <Width>1020</Width>
                        </Size>
                        <MaxSize>
                            <Height>800</Height>
                            <Width>1200</Width>
                        </MaxSize>
                        <MinSize>
                            <Height>400</Height>
                            <Width>600</Width>
                        </MinSize>
                    </Geometry>
                </UI>
            </DispatchInfo>
        </Extension>
   
    </DispatchInfoList>
</ExtensionManifest>

```
<p>&nbsp;</p>


<h1>Debugging the Extension</h1>
<h2><br /> <strong>Using unsigned extensions during development</strong></h2>
<p>&nbsp;If your Extensions is not signed, they will be displayed in the Bridge Extension list but appear
    as Blank without any functionality. If you are in the midst of development and want to bypass the
    need to sign your extensions, you can bypass the check for extension signatures by editing the CSXS
    preference properties file\registry entry.</p>
<p><strong>Windows-</strong></p>

<ol>
    <li>Open Registry Editor.</li>
    <li>Go to &nbsp;HKEY_CURRENT_USER/Software/Adobe/CSXS.7, then add a new entry <strong>PlayerDebugMode</strong>        of type &quot;string&quot; with the value of &quot;<strong>1</strong>&quot;.</li>
    <li>Relaunch Bridge.</li>
    <li>The Extension will work without signing.<br /><br /></li>
</ol>
<p><strong>Mac-</strong></p>
<ol>
    <li>In the terminal, type: <strong>defaults write com.adobe.CSXS.7 PlayerDebugMode 1 </strong></li>
    <li>Restart Mac and Launch Bridge.</li>
    <li>The Extension should work without signing.</li>
</ol>
<p>(The plist is also located at <strong>/Users/&lt;username&gt;/Library/Preferences/com.adobe.CSXS.7.plist</strong>)</p>
<h3><ac:image ac:border="true" ac:height="250"><ri:attachment ri:filename="image2017-3-27 14:10:29.png" /></ac:image></h3>
<h2><strong>Debugging in Chrome</strong></h2>
<p>CEP supports remote debugging for HTML extensions. You can use Chrome developer tools to debug your Extension.</p>
<p><strong>Steps</strong>:</p>
<p>1.Create a &ldquo;.debug&rdquo; file to the extension root directory such as Test_Extension\.debug.</p>
<p>The .debug file contains remote debug ports. Developers must create this file and use valid debug ports
    because both remote debugging and dev tools are based on it.</p>
<p>This file name is special for both Windows and Mac platforms, it has to be created via command line.</p>
<p>&nbsp;On Windows, open cmd, go to the path of your extension and type &nbsp;&quot;copy con .debug&quot;
    and &quot;Ctrl+Z&quot; to create an empty file.<br />&nbsp;On Mac, use &quot;touch .debug&quot; to
    create an empty file.</p>

<p>&nbsp;</p>
<p><span style="color: rgb(36,41,46);">2. Edit the .debug file and it should resemble the following (and the Extension ID must match the one in the panel's manifest).&nbsp;The value of Port should be between 1024 and 65535 (not include 65535), otherwise remote debugging and dev tools will not work.</span><br
    /><span style="color: rgb(36,41,46);"><br /></span></p>
    
```xml
<?xml version="1.0" encoding="UTF-8"?> 
<ExtensionList>
    <Extension Id="ShowFolder">
        <HostList>
           <Host Name="KBRG" Port="8888"/> 
        </HostList>
    </Extension>
</ExtensionList>
```

<p>&nbsp;</p>
<p>3. Launch your Application and open the Extension.Open Chrome and navigate to&nbsp;<a href="http://localhost:8888">http://localhost:8888</a>.
    Your Extension should be visible.</p>

<h2><strong>Logs locations</strong></h2>
<p>Log files with useful debugging information are created for each of the applications supporting CEP extensions.
    The platform-specific locations for the log files are as follows:</p>
<p>&bull; Win: C:\Users\USERNAME\AppData\Local\Temp<br />&bull; Mac: /Users/USERNAME/Library/Logs/CSXS</p>
<p>These files are generated with the following naming conventions:CEP&lt;versionNumber&gt;-&lt;HostID&gt;.log.Example-
    CEP7-KBRG.log</p>
<p>Logging levels can be modified as per the following levels:</p>
<p>&bull; 0 - Off (No logs are generated)<br />&bull; 1 - Error (the default logging value)<br />&bull;
    2 - Warn<br />&bull; 3 - Info<br />&bull; 4 - Debug<br />&bull; 5 - Trace<br />&bull; 6 - All</p>
<p>The LogLevel key can be updated at the following location (The application should be restarted for the
    log level changes to take effect):</p>
<p>&bull; Win: regedit &gt; HKEY_CURRENT_USER/Software/Adobe/CSXS.7<br />&bull; Mac: /Users/USERNAME/Library/Preferences/com.adobe.CSXS.7.plist</p>

<h1><strong>Signing and Packaging the Extension</strong></h1>
<p><strong><br /></strong></p>
<p>After testing your extension thoroughly, you must package and sign your extension so users can install
    it in their systems.</p>
<p>Adobe provides a command-line tool, <strong>ZXPSignCmd</strong>, that you can use to package and sign
    extensions so they can be installed in Adobe desktop applications. The signature verifies that the
    package has not been altered since its packaging.</p>
<p>You can use this tool to -</p>
<p><strong>Create a self-signed certificate-</strong><br />Example: .<em>/ZXPSignCmd <strong>-selfSignedCert</strong> US NY MyCompany MyCommonName abc123 MyCert.p12</em></p>
<p>This generates a file named MyCert.p12 in the current folder. You can use this certificate to sign your
    extension.</p>
<p><br /><strong>Create a signed ZXP package-</strong><br />Example:&nbsp;<em>./ZXPSignCmd <strong>-sign</strong> myExtProject myExtension.zxp MyCert.p12 abc123</em></p>
<p>This generates the file myExtension.zxp in the current folder, adding these two files to the packaged
    and signed extension in the final ZXP archive:<br />1. mimetype : A file with the ASCII name of mimetype
    that holds the MIME type for the ZIP container (application/vnd.adobe.air-ucf-package+zip).<br />2.
    signatures.xml: A file in the META-INF directory at the root level of the container file system that
    holds digital signatures of the container and its contents.</p>
<p><strong>&nbsp;</strong></p>
<p><strong>Verify an existing ZXP package.</strong></p>
<p>Example:&nbsp;<em>./ZXPSignCmd <strong>-verify</strong> myExtProject myExtension.zxp</em></p>
<p>This will show message as 'Signature verified successfully' is the signature is valid.</p>
<p>More information about signing and packaging can be found at&nbsp;<a href="http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/creativesuite/pdfs/SigningTechNote_CC.pdf">Extension Signing-Tech Note</a>.</p>
<h1><strong>Extension Folders</strong></h1>
<h2>Extension Folders</h2>
<p>CEP supports 3 types of extension folders.For Bridge, this location is below-</p>
<ul>
    <li>Product extension folder.&nbsp;
        <ul>
            <li>
                <p>Win(x86) :&nbsp;C:\Program Files\Adobe\<strong>&lt;Bridge Product Folder&gt;</strong>\CEP\extensions<br
                    />eg.&nbsp;C:\Program Files\Adobe\Adobe Bridge CC 2018 (32 Bit)\CEP\extension</p>
            </li>
            <li>Win(x64) :&nbsp;C:\Program Files\Adobe\<strong>&lt;Bridge Product Folder&gt;</strong>\CEP\extensions<br
                />eg.&nbsp;C:\Program Files\Adobe\Adobe Bridge CC 2018\CEP\extensions<br /><br /></li>
            <li>Mac:&nbsp;&nbsp;/Applications/<strong>&lt;Bridge Product Folder&gt;</strong>/CEP/extensions<br
                />eg.&nbsp;&nbsp;/Applications/Adobe Bridge CC 2018/CEP/extensions</li>
        </ul>
    </li>
    <li>System extension folder</li>
    <ul>
        <li>
            <p>Win(x86): C:\Program Files\Common Files\Adobe\CEP\extensions</p>
        </li>
        <li>
            <p>Win(x64): C:\Program Files (x86)\Common Files\Adobe\CEP\extensions, and&nbsp;C:\Program Files\Common
                Files\Adobe\CEP\extensions (since CEP 6.1)</p>
        </li>
        <li>
            <p>Mac: /Library/Application Support/Adobe/CEP/extensions</p>
        </li>
    </ul>
    <li>Per-user extension folder
        <ul>
            <li>
                <p>Win: C:\Users\{USER}\AppData\Roaming\Adobe\CEP/extensions</p>
            </li>
            <li>
                <p>Mac: ~/Library/Application Support/Adobe/CEP/extensions</p>
            </li>
        </ul>
    </li>
</ul>
<p><strong><br /></strong></p>
<p>&nbsp;</p>
<h1><strong>Using ExtendScript in a CEP Extension</strong></h1>
<p>ExtendScript code for the Host Application can be called from a CEP Extension inside HTML and Java script
    code in many ways using the EvalScript() function. &nbsp;ExtendScript code opens up all the Scripting
    API of the Host Application to CEP Extension developers.The Extend Script code((.JSX) can span across
    multiple files and there are many ways to load them inside the CEP Extension. A sample using multiple
    jsx files is also provided.</p>
<p>ExtendScript can be debugged using the ExtendScript &nbsp;ToolKit CC using below Steps-</p>
<ul>
    <li>Open the JSX script in ExtendScript Toolkit CC.</li>
    <li>Connect it with Bridge(supporting CEP) and put a debug point.</li>
    <li>Open the CEP Extension and call the EvalScript code. You should be able to debug the ExtendScript
        code.      
    </li>
</ul>
<h1><strong>Using Nodejs in a CEP Extension</strong></h1>
<p>In CEP, Node.js is disabled by default. Below parameter needs to be added in your &nbsp;CEP Extension
    Manifest file to enable NodeJS-</p>
<p>Under the resources Tag-add below</p>
<p>&lt;CEFCommandLine&gt;&lt;Parameter&gt;--enable-nodejs&lt;/Parameter&gt;&lt;/CEFCommandLine&gt;
    <span
        class="Apple-tab-span">&nbsp;</span>
</p>
<p>Example-</p>

```xml
<Resources>
<MainPath>./index.html</MainPath> 
<CEFCommandLine> 
<Parameter>--enable-nodejs</Parameter>
</CEFCommandLine>
</Resources>
```
<h1><strong>Important Resources</strong></h1>
<table>
    <tbody>
        <tr>
            <th>Resource Link</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Bridge CEP Samples</td>
            <td><a href="https://github.com/siddharthsingh89/BridgeSamples">https://github.com/siddharthsingh89/BridgeSamples</a></td>
        </tr>
        <tr>
            <td>CEP 7.0 HTML CookBook</td>
            <td><a href="https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/CEP_7.0_HTML_Extension_Cookbook.pdf">https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_7.x/CEP_7.0_HTML_Extension_Cookbook.pdf</a></td>
        </tr>
        <tr>
            <td>Application Signing TechNote</td>
            <td><a href="http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/creativesuite/pdfs/SigningTechNote_CC.pdf">http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/creativesuite/pdfs/SigningTechNote_CC.pdf</a></td>
        </tr>
        <tr>
            <td colspan="1">Adobe CEP Resources</td>
            <td colspan="1"><a href="https://github.com/Adobe-CEP/CEP-Resources">https://github.com/Adobe-CEP/CEP-Resources</a></td>
        </tr>
        <tr>
            <td colspan="1">Bridge Scripting Reference</td>
            <td colspan="1"><a href="http://www.adobe.com/devnet/bridge.html">http://www.adobe.com/devnet/bridge.html</a></td>
        </tr>
        <tr>
            <td colspan="1">Adobe ExtendScript Tools Guide</td>
            <td colspan="1"><a href="https://www.adobe.com/content/dam/Adobe/en/devnet/scripting/pdfs/javascript_tools_guide.pdf">https://www.adobe.com/content/dam/Adobe/en/devnet/scripting/pdfs/javascript_tools_guide.pdf</a></td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
