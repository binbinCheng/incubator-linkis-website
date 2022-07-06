"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[69437],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46488:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),r=["components"],o={title:"How to Write Unit Test Code",sidebar_position:10},l=void 0,c={unversionedId:"how-to-write-unit-test-code",id:"how-to-write-unit-test-code",title:"How to Write Unit Test Code",description:"Frame Selection",source:"@site/community/how-to-write-unit-test-code.md",sourceDirName:".",slug:"/how-to-write-unit-test-code",permalink:"/community/how-to-write-unit-test-code",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/how-to-write-unit-test-code.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"How to Write Unit Test Code",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Release-Notes Writing Specification",permalink:"/community/development_specification/release-notes"},next:{title:"Division of Microservices",permalink:"/community/microservice-division"}},p=[{value:"Frame Selection",id:"frame-selection",children:[{value:"Configure the Template of JUnit in Idea",id:"configure-the-template-of-junit-in-idea",children:[],level:3}],level:2},{value:"Unit Test Criteria",id:"unit-test-criteria",children:[{value:"Catalogue And Naming Citeria",id:"catalogue-and-naming-citeria",children:[],level:3},{value:"Unit Coding Specifications",id:"unit-coding-specifications",children:[],level:3}],level:2},{value:"Use of Assertions",id:"use-of-assertions",children:[{value:"Junit5 General Assertion",id:"junit5-general-assertion",children:[],level:3},{value:"Junit5 Combined Assertion and Exception Assertion",id:"junit5-combined-assertion-and-exception-assertion",children:[],level:3},{value:"Assertion Usage Criteria",id:"assertion-usage-criteria",children:[],level:3}],level:2},{value:"Compilation of Unit Test",id:"compilation-of-unit-test",children:[{value:"Class Division",id:"class-division",children:[],level:3},{value:"Unit Test of Controller class",id:"unit-test-of-controller-class",children:[],level:3},{value:"Unit Test of Server class",id:"unit-test-of-server-class",children:[],level:3},{value:"Unit Test of Dao class",id:"unit-test-of-dao-class",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"frame-selection"},"Frame Selection"),(0,i.kt)("p",null,"Junit5 + mockito + Jacobo + H2 local database"),(0,i.kt)("p",null,"Idea enhancement plugin  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JUnitGenerator V2. 0 standard module for generating test cases"),(0,i.kt)("li",{parentName:"ul"},"Create the allnewset object and set the default value for allnewset"),(0,i.kt)("li",{parentName:"ul"},"The association mapping between mybatisx ADO and mapper is easy to view")),(0,i.kt)("h3",{id:"configure-the-template-of-junit-in-idea"},"Configure the Template of JUnit in Idea"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'\n######################################################################################## \n## \n## Available variables: \n##         $entryList.methodList - List of method composites \n##         $entryList.privateMethodList - List of private method composites \n##         $entryList.fieldList - ArrayList of class scope field names \n##         $entryList.className - class name \n##         $entryList.packageName - package name \n##         $today - Todays date in MM/dd/yyyy format \n## \n##            MethodComposite variables: \n##                $method.name - Method Name \n##                $method.signature - Full method signature in String form \n##                $method.reflectionCode - list of strings representing commented out reflection code to access method (Private Methods) \n##                $method.paramNames - List of Strings representing the method\'s parameters\' names \n##                $method.paramClasses - List of Strings representing the method\'s parameters\' classes \n## \n## You can configure the output class name using "testClass" variable below. \n## Here are some examples: \n## Test${entry.ClassName} - will produce TestSomeClass \n## ${entry.className}Test - will produce SomeClassTest \n## \n######################################################################################## \n## \n## title case \n#macro (cap $strIn)$strIn.valueOf($strIn.charAt(0)).toUpperCase()$strIn.substring(1)#end \n## Initial lowercase custom down\n#macro (down $strIn)$strIn.valueOf($strIn.charAt(0)).toLowerCase()$strIn.substring(1)#end\n## Iterate through the list and generate testcase for every entry. \n#foreach ($entry in $entryList) \n#set( $testClass="${entry.className}Test") \n##\n\n/*\n * Licensed to the Apache Software Foundation (ASF) under one or more\n * contributor license agreements.  See the NOTICE file distributed with\n * this work for additional information regarding copyright ownership.\n * The ASF licenses this file to You under the Apache License, Version 2.0\n * (the "License"); you may not use this file except in compliance with\n * the License.  You may obtain a copy of the License at\n *\n *    http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\npackage $entry.packageName; \n \nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\n\n/** \n * ${entry.className} Tester\n*/ \npublic class $testClass { \n \n    @Autowired\n    private ${entry.className} #down(${entry.className});\n \n    @BeforeEach\n    @DisplayName("Each unit test method is executed once before execution")\n    public void before() throws Exception {\n    }\n \n    @AfterEach\n    @DisplayName("Each unit test method is executed once before execution")\n    public void after() throws Exception {\n    }\n \n#foreach($method in $entry.methodList) \n \n    @Test\n    @DisplayName("Method description: ...")\n    public void test#cap(${method.name})() throws Exception { \n        //TODO: Test goes here... \n    } \n \n#end \n \n#foreach($method in $entry.privateMethodList) \n\n    @Test\n    @DisplayName("Method description: ...")\n    public void test#cap(${method.name})() throws Exception { \n        //TODO: Test goes here... \n    #foreach($string in $method.reflectionCode) \n    $string \n    #end \n    } \n \n#end \n} \n#end\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/155080741-7e6b89db-0ee6-48e1-a858-4123d5bbf2f0.png",alt:"test-0"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure test class generation path  "),(0,i.kt)("p",{parentName:"li"},"Original configuration: ${sourcepath}/test/${package}/${filename}",(0,i.kt)("br",{parentName:"p"}),"\n","Modified configuration: ${sourcepath}/..//test/java/${PACKAGE}/${FILENAME}  "),(0,i.kt)("p",{parentName:"li"},"As shown in the figure:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/155080336-476feba6-2790-43b5-a572-ee0aa6a9586f.png",alt:"test-1"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select class -> right click -> generate -> JUnit test to generate a test class"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/155080650-4fa68c66-5d7c-4e9f-ba63-0c7fc62d9df2.png",alt:"test-2"})))),(0,i.kt)("h2",{id:"unit-test-criteria"},"Unit Test Criteria"),(0,i.kt)("h3",{id:"catalogue-and-naming-citeria"},"Catalogue And Naming Citeria"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Unit test code directory\nIt must be written in the following project directory: src/test/java. It is not allowed to write in the business code directory.",(0,i.kt)("br",{parentName:"li"}),"Note: this directory will be skipped during source code compilation, while the unit test framework scans this directory by default. The test configuration file must be placed under the src/test/resources file"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"The package name of the test class should be consistent with the package name of the tested class",(0,i.kt)("br",{parentName:"li"}),"Example:",(0,i.kt)("br",{parentName:"li"}),"Business class\uff1a src/main/java/org/apache/linkis/jobhistory/dao/JobDetailMapper.java",(0,i.kt)("br",{parentName:"li"}),"Corresponding test class\uff1asrc/main/java/org/apache/linkis/jobhistory/dao/JobDetailMapperTest java  "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"Naming and definition specification of test class: use test as the suffix of class name",(0,i.kt)("br",{parentName:"li"}),"The test class is named as follows:",(0,i.kt)("br",{parentName:"li"}),"Tested business + test, tested interface + test, tested class + test  "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:4},(0,i.kt)("li",{parentName:"ol"},"Specification for naming and defining test cases: use test as the prefix of method names\nThe naming rule of test cases is: test + method name. Avoid using names that have no meaning in test1 and test2. Secondly, necessary function and method annotations are required.")))),(0,i.kt)("h3",{id:"unit-coding-specifications"},"Unit Coding Specifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"System is not allowed to be used in unit test Out for human flesh verification, or if judgment for verification (log can be used for Key log output). Assertion assert must be used for verification."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"Maintain the independence of unit testing. In order to ensure that unit tests are stable, reliable and easy to maintain, unit test cases must not call each other or rely on the order of execution.\nCounterexample: method2 needs to rely on the execution of method1 and take the execution result as the input of method2"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"Unit tests must be repeatable and not affected by the external environment.",(0,i.kt)("br",{parentName:"li"}),"Note: unit tests are usually put into continuous integration. Unit tests will be executed every time there is code check in. If the single test depends on the external environment (network, service, middleware, etc.), it is easy to lead to the unavailability of the continuous integration mechanism.",(0,i.kt)("br",{parentName:"li"}),"Positive example: in order not to be affected by the external environment, it is required to change the relevant dependencies of the tested class into injection when designing the code, and inject a local (memory) implementation or mock implementation with a dependency injection framework such as spring during testing."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:4},(0,i.kt)("li",{parentName:"ol"},"Incremental code ensures that the unit test passes.\nNote: the new code must supplement the unit test. If the new code affects the original unit test, please correct it"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:5},(0,i.kt)("li",{parentName:"ol"},"For unit testing, it is necessary to ensure that the test granularity is small enough to help accurately locate the problem. Single test granularity is generally at the method level (very few scenarios such as tool classes or enumeration classes can be at the class level).",(0,i.kt)("br",{parentName:"li"}),"Note: only with small test granularity can we locate the error location as soon as possible. Single test is not responsible for checking cross class or cross system interaction logic, which is the field of integration testing.")))),(0,i.kt)("h2",{id:"use-of-assertions"},"Use of Assertions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The result verification of all test cases must use the assertion pattern     \n    use Assertions.assertEquals\n    Assertions.assertEquals(expectedJobDetail, actualJobDetail)\n    \nThe assertions assertion of junit5 is preferred, and the assertions of assertij are allowed in very few scenarios    \n    Comparison of objects before/after updating common scene databases\n    Asserting the usingrecursive comparison pattern using assertj's assertThat\n    Assertions.assertThat(actualObject).usingRecursiveComparison().isEqualTo(expectedObject);\n")),(0,i.kt)("h3",{id:"junit5-general-assertion"},"Junit5 General Assertion"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Assertequals"),(0,i.kt)("td",{parentName:"tr",align:null},"judge whether two objects or two original types are equal"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Assertnotequals"),(0,i.kt)("td",{parentName:"tr",align:null},"judge whether two objects or two original types are not equal"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Asserttrue"),(0,i.kt)("td",{parentName:"tr",align:null},"judge whether the given Boolean value is true"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Assertfalse"),(0,i.kt)("td",{parentName:"tr",align:null},"judge whether the given Boolean value is false"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AssertNull"),(0,i.kt)("td",{parentName:"tr",align:null},"judge whether the given object reference is null"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AssertNotNull"),(0,i.kt)("td",{parentName:"tr",align:null},"judge whether the given object reference is not null"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Assert all"),(0,i.kt)("td",{parentName:"tr",align:null},"multiple judgment logics are processed together. As long as one error is reported, the overall test will fail"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"junit5-combined-assertion-and-exception-assertion"},"Junit5 Combined Assertion and Exception Assertion"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Composite assertion"),"\nThe assertall method can process multiple judgment logics together. As long as one error is reported, the overall test will fail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'  @Test\n  @DisplayName("assert all")\n  public void all() {\n  //Multiple judgments are executed together. Only when all judgments are passed can they be considered as passed\n   assertAll("Math",\n      () -> assertEquals(2, 1 + 1),\n      () -> assertTrue(1 > 0)\n   );\n  }\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exception assertion")),(0,i.kt)("p",null,"Assertions. The assertthrows method is used to test whether the executable instance throws an exception of the specified type when executing the execute method;",(0,i.kt)("br",{parentName:"p"}),"\n","If the execute method does not throw an exception during execution, or the exception thrown is inconsistent with the expected type, the test will fail;",(0,i.kt)("br",{parentName:"p"}),"\n","Example:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'  @Test\n  @DisplayName("Assertion of exception")\n  void exceptionTesting() {\n      // When the execute method is executed, if an exception is thrown and the type of the exception is the first parameter of assertthrows (here is arithmeticexception. Class)\n      // The return value is an instance of an exception\n      Exception exception = assertThrows(ArithmeticException.class, () -> Math.floorDiv(1,0));\n      log.info("assertThrows pass,return instance\uff1a{}", exception.getMessage());\n  }\n')),(0,i.kt)("h3",{id:"assertion-usage-criteria"},"Assertion Usage Criteria"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Object instance equality assertion")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Is it the same object instance")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"Use junitd's assertions assertEquals\nAssertions.assertEquals(expectedJobDetail, actualJobDetail)\n")),(0,i.kt)("p",null,"Not the same instance, but whether the attribute values of the comparison instance are exactly equal",(0,i.kt)("br",{parentName:"p"}),"\n","AssertJ"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"Comparison of objects before/after updating common scene databases\nAsserting the usingrecursive comparison pattern using assertj's assertthat\nAssertions. assertThat(actualObject). usingRecursiveComparison(). isEqualTo(expectedObject);\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Assertion of set results such as list\nThe size of the result set needs to be asserted\nScope or specific size\nEach object in the result set needs assertion, which is recommended to be used in combination with the predicate of stream mode\nExample:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ArrayList<JobRespProtocol> jobRespProtocolArrayList=service. batchChange(jobDetailReqBatchUpdate);\n//List is matched with the predicate of stream for assertion judgment\nPredicate<JobRespProtocol> statusPrecate = e -> e.getStatus()==0;\nassertEquals(2, jobRespProtocolArrayList.size());\nassertTrue(jobRespProtocolArrayList.stream(). anyMatch(statusPrecate));\n")),(0,i.kt)("h2",{id:"compilation-of-unit-test"},"Compilation of Unit Test"),(0,i.kt)("h3",{id:"class-division"},"Class Division"),(0,i.kt)("p",null,"It can be roughly classified according to the major functions of the class"),(0,i.kt)("p",null,"-The controller of the HTTP service provided by the controller cooperates with mockmvc for unit testing\n-Service layer of service business logic code\n-Dao and Dao layer of database operation\n-Util tool function class is a common function tool\n-Exception class is a custom exception class\n-Enum class\n-Entity class is used for DB interaction and parameter VO object and other entity classes processed by methods (if there are other user-defined functions besides normal get set, unit test is required)"),(0,i.kt)("h3",{id:"unit-test-of-controller-class"},"Unit Test of Controller class"),(0,i.kt)("p",null,"Using mockmvc"),(0,i.kt)("p",null,"It mainly verifies the requestmethod method of interface request, basic parameters and expected return results.",(0,i.kt)("br",{parentName:"p"}),"\n","Main scenarios: scenarios with and without unnecessary parameters are abnormal  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},' @Test\n    public void testList() throws Exception {\n        //Bring unnecessary parameters\n        MultiValueMap<String, String> paramsMap = new LinkedMultiValueMap<>();\n        paramsMap.add("startDate", String.valueOf(System.currentTimeMillis()));\n        MvcResult mvcResult = mockMvc.perform(get("/jobhistory/list")\n                .params(paramsMap))\n                .andExpect(status().isOk())\n                .andExpect(content().contentType(MediaType.APPLICATION_JSON))\n                .andReturn();\n\n        Message res = JsonUtils.jackson().readValue(mvcResult.getResponse().getContentAsString(), Message.class);\n        assertEquals(res.getStatus(), MessageStatus.SUCCESS());\n        logger.info(mvcResult.getResponse().getContentAsString());\n\n        //Without unnecessary parameters\n        mvcResult = mockMvc.perform(get("/jobhistory/list"))\n                .andExpect(status().isOk())\n                .andExpect(content().contentType(MediaType.APPLICATION_JSON))\n                .andReturn();\n\n        res = JsonUtils.jackson().readValue(mvcResult.getResponse().getContentAsString(), Message.class);\n        assertEquals(res.getStatus(), MessageStatus.SUCCESS());\n\n        logger.info(mvcResult.getResponse().getContentAsString());\n    }\n\n')),(0,i.kt)("h3",{id:"unit-test-of-server-class"},"Unit Test of Server class"),(0,i.kt)("p",null,"   //todo"),(0,i.kt)("h3",{id:"unit-test-of-dao-class"},"Unit Test of Dao class"),(0,i.kt)("p",null,"Use H2 database, application. In the configuration file In properties, you need to configure the basic information of H2 database and the relevant path information of mybatis  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"#h2 database configuration\nspring.datasource.driver-class-name=org.h2.Driver\n# Script to connect database\nspring.datasource.url=jdbc:h2:mem:test;MODE=MySQL;DB_CLOSE_DELAY=-1;DATABASE_TO_LOWER=true\n#Script to initialize database tables\nspring.datasource.schema=classpath:create.sql\n#Script to initialize data for database tables\nspring.datasource.data=classpath:data.sql\nspring.datasource.username=sa\nspring.datasource.password=\nspring.datasource.hikari.connection-test-query=select 1\nspring.datasource.hikari.minimum-idle=5\nspring.datasource.hikari.auto-commit=true\nspring.datasource.hikari.validation-timeout=3000\nspring.datasource.hikari.pool-name=linkis-test\nspring.datasource.hikari.maximum-pool-size=50\nspring.datasource.hikari.connection-timeout=30000\nspring.datasource.hikari.idle-timeout=600000\nspring.datasource.hikari.leak-detection-threshold=0\nspring.datasource.hikari.initialization-fail-timeout=1\n\n#\u914d\u7f6emybatis-plus\u7684mapper\u4fe1\u606f \u56e0\u4e3a\u4f7f\u7528\u7684\u662fmybatis-plus\uff0c\u4f7f\u7528mybatis-plus\nmybatis-plus.mapper-locations=classpath:org/apache/linkis/jobhistory/dao/impl/JobDetailMapper.xml,classpath:org/apache/linkis/jobhistory/dao/impl/JobHistoryMapper.xml\nmybatis-plus.type-aliases-package=org.apache.linkis.jobhistory.entity\nmybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl\n")),(0,i.kt)("p",null,"List is configured with predicate of stream to make assertion judgment and write specification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use @Transactional and @Rollback to realize data rollback and avoid data pollution"),(0,i.kt)("li",{parentName:"ol"},"Each DaoTest should have a public method for creating and initializing data (or the way of importing data CSV) to prepare data. For related queries, updates, deletions and other operations, the public method should be called first to prepare data"),(0,i.kt)("li",{parentName:"ol"},"Create test data. If an attribute value is a self increasing ID, it should not be assigned"),(0,i.kt)("li",{parentName:"ol"},"The test data created shall be consistent with the actual sample data as far as possible"),(0,i.kt)("li",{parentName:"ol"},"When updating the data test, if the field allows, please prefix it with 'modify original value'")))}d.isMDXComponent=!0}}]);