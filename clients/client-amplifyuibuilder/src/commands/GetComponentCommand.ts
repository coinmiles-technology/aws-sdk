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

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import {
  GetComponentRequest,
  GetComponentRequestFilterSensitiveLog,
  GetComponentResponse,
  GetComponentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetComponentCommand,
  serializeAws_restJson1GetComponentCommand,
} from "../protocols/Aws_restJson1";

export interface GetComponentCommandInput extends GetComponentRequest {}
export interface GetComponentCommandOutput extends GetComponentResponse, __MetadataBearer {}

/**
 * <p>Returns an existing component for an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, GetComponentCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, GetComponentCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 */
export class GetComponentCommand extends $Command<
  GetComponentCommandInput,
  GetComponentCommandOutput,
  AmplifyUIBuilderClientResolvedConfig
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

  constructor(readonly input: GetComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyUIBuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComponentCommandInput, GetComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetComponentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "GetComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComponentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetComponentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComponentCommandOutput> {
    return deserializeAws_restJson1GetComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
