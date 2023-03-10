// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sts.json */

const G="required",
H="type",
I="fn",
J="argv",
K="ref",
L="properties",
M="headers";
const a=false,
b=true,
c="PartitionResult",
d="tree",
e="booleanEquals",
f="stringEquals",
g="sigv4",
h="us-east-1",
i="sts",
j="endpoint",
k="https://sts.{Region}.{PartitionResult#dnsSuffix}",
l="error",
m="getAttr",
n={[G]:false,[H]:"String"},
o={[G]:true,"default":false,[H]:"Boolean"},
p={[K]:"Region"},
q={[K]:"UseFIPS"},
r={[K]:"UseDualStack"},
s={[I]:"isSet",[J]:[{[K]:"Endpoint"}]},
t={[K]:"Endpoint"},
u={"url":"https://sts.amazonaws.com",[L]:{"authSchemes":[{"name":g,"signingRegion":h,"signingName":i}]},[M]:{}},
v={},
w={"conditions":[{[I]:f,[J]:[p,"aws-global"]}],[j]:u,[H]:j},
x={[I]:e,[J]:[q,true]},
y={[I]:e,[J]:[r,true]},
z={[I]:e,[J]:[true,{[I]:m,[J]:[{[K]:c},"supportsFIPS"]}]},
A={[K]:c},
B={[I]:e,[J]:[true,{[I]:m,[J]:[A,"supportsDualStack"]}]},
C={"url":k,[L]:{},[M]:{}},
D=[t],
E=[x],
F=[y];
const _data={version:"1.0",parameters:{Region:n,UseDualStack:o,UseFIPS:o,Endpoint:n,UseGlobalEndpoint:o},rules:[{conditions:[{[I]:"aws.partition",[J]:[p],assign:c}],[H]:d,rules:[{conditions:[{[I]:e,[J]:[{[K]:"UseGlobalEndpoint"},b]},{[I]:e,[J]:[q,a]},{[I]:e,[J]:[r,a]},{[I]:"not",[J]:[s]}],[H]:d,rules:[{conditions:[{[I]:f,[J]:[p,"ap-northeast-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"ap-south-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"ap-southeast-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"ap-southeast-2"]}],endpoint:u,[H]:j},w,{conditions:[{[I]:f,[J]:[p,"ca-central-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"eu-central-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"eu-north-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"eu-west-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"eu-west-2"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"eu-west-3"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"sa-east-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,h]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"us-east-2"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"us-west-1"]}],endpoint:u,[H]:j},{conditions:[{[I]:f,[J]:[p,"us-west-2"]}],endpoint:u,[H]:j},{endpoint:{url:k,[L]:{authSchemes:[{name:g,signingRegion:"{Region}",signingName:i}]},[M]:v},[H]:j}]},{conditions:[s,{[I]:"parseURL",[J]:D,assign:"url"}],[H]:d,rules:[{conditions:E,error:"Invalid Configuration: FIPS and custom endpoint are not supported",[H]:l},{[H]:d,rules:[{conditions:F,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",[H]:l},{endpoint:{url:t,[L]:v,[M]:v},[H]:j}]}]},{conditions:[x,y],[H]:d,rules:[{conditions:[z,B],[H]:d,rules:[{endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",[L]:v,[M]:v},[H]:j}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",[H]:l}]},{conditions:E,[H]:d,rules:[{conditions:[z],[H]:d,rules:[{[H]:d,rules:[{conditions:[{[I]:f,[J]:["aws-us-gov",{[I]:m,[J]:[A,"name"]}]}],endpoint:C,[H]:j},{endpoint:{url:"https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",[L]:v,[M]:v},[H]:j}]}]},{error:"FIPS is enabled but this partition does not support FIPS",[H]:l}]},{conditions:F,[H]:d,rules:[{conditions:[B],[H]:d,rules:[{endpoint:{url:"https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",[L]:v,[M]:v},[H]:j}]},{error:"DualStack is enabled but this partition does not support DualStack",[H]:l}]},{[H]:d,rules:[w,{endpoint:C,[H]:j}]}]}]};
export const ruleSet: RuleSetObject = _data;
