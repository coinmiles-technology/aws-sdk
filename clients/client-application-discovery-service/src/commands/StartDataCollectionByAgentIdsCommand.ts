// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  StartDataCollectionByAgentIdsRequest,
  StartDataCollectionByAgentIdsRequestFilterSensitiveLog,
  StartDataCollectionByAgentIdsResponse,
  StartDataCollectionByAgentIdsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartDataCollectionByAgentIdsCommand,
  serializeAws_json1_1StartDataCollectionByAgentIdsCommand,
} from "../protocols/Aws_json1_1";

export interface StartDataCollectionByAgentIdsCommandInput extends StartDataCollectionByAgentIdsRequest {}
export interface StartDataCollectionByAgentIdsCommandOutput
  extends StartDataCollectionByAgentIdsResponse,
    __MetadataBearer {}

/**
 * <p>Instructs the specified agents or connectors to start collecting data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartDataCollectionByAgentIdsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartDataCollectionByAgentIdsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StartDataCollectionByAgentIdsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDataCollectionByAgentIdsCommandInput} for command's `input` shape.
 * @see {@link StartDataCollectionByAgentIdsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 */
export class StartDataCollectionByAgentIdsCommand extends $Command<
  StartDataCollectionByAgentIdsCommandInput,
  StartDataCollectionByAgentIdsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: StartDataCollectionByAgentIdsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDataCollectionByAgentIdsCommandInput, StartDataCollectionByAgentIdsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDataCollectionByAgentIdsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StartDataCollectionByAgentIdsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDataCollectionByAgentIdsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartDataCollectionByAgentIdsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDataCollectionByAgentIdsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDataCollectionByAgentIdsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDataCollectionByAgentIdsCommandOutput> {
    return deserializeAws_json1_1StartDataCollectionByAgentIdsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
