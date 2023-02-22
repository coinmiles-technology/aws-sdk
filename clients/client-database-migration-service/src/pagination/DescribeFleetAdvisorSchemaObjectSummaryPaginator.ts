// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeFleetAdvisorSchemaObjectSummaryCommand,
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
} from "../commands/DescribeFleetAdvisorSchemaObjectSummaryCommand";
import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  ...args: any
): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetAdvisorSchemaObjectSummaryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  ...args: any
): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> => {
  // @ts-ignore
  return await client.describeFleetAdvisorSchemaObjectSummary(input, ...args);
};
export async function* paginateDescribeFleetAdvisorSchemaObjectSummary(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
