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
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import {
  DeleteApplicationVpcConfigurationRequest,
  DeleteApplicationVpcConfigurationRequestFilterSensitiveLog,
  DeleteApplicationVpcConfigurationResponse,
  DeleteApplicationVpcConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand,
  serializeAws_json1_1DeleteApplicationVpcConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteApplicationVpcConfigurationCommandInput extends DeleteApplicationVpcConfigurationRequest {}
export interface DeleteApplicationVpcConfigurationCommandOutput
  extends DeleteApplicationVpcConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Removes a VPC configuration from a Kinesis Data Analytics application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationVpcConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationVpcConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DeleteApplicationVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 */
export class DeleteApplicationVpcConfigurationCommand extends $Command<
  DeleteApplicationVpcConfigurationCommandInput,
  DeleteApplicationVpcConfigurationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
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

  constructor(readonly input: DeleteApplicationVpcConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationVpcConfigurationCommandInput, DeleteApplicationVpcConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteApplicationVpcConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DeleteApplicationVpcConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationVpcConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationVpcConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteApplicationVpcConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApplicationVpcConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationVpcConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}