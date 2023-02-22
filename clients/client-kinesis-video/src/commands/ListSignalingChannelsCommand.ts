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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  ListSignalingChannelsInput,
  ListSignalingChannelsInputFilterSensitiveLog,
  ListSignalingChannelsOutput,
  ListSignalingChannelsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSignalingChannelsCommand,
  serializeAws_restJson1ListSignalingChannelsCommand,
} from "../protocols/Aws_restJson1";

export interface ListSignalingChannelsCommandInput extends ListSignalingChannelsInput {}
export interface ListSignalingChannelsCommandOutput extends ListSignalingChannelsOutput, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ChannelInfo</code> objects. Each object describes a
 *             signaling channel. To retrieve only those channels that satisfy a specific condition,
 *             you can specify a <code>ChannelNameCondition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListSignalingChannelsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListSignalingChannelsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new ListSignalingChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSignalingChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSignalingChannelsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class ListSignalingChannelsCommand extends $Command<
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput,
  KinesisVideoClientResolvedConfig
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

  constructor(readonly input: ListSignalingChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSignalingChannelsCommandInput, ListSignalingChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSignalingChannelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "ListSignalingChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSignalingChannelsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListSignalingChannelsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSignalingChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSignalingChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSignalingChannelsCommandOutput> {
    return deserializeAws_restJson1ListSignalingChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}