# language: en
@s3 @buckets
Feature: Working with Buckets

  Scenario: CRUD buckets using the classic endpoint
    Given I am using the S3 "us-east-1" region
    When I create a bucket
    Then the bucket should exist
    # Then the bucket should not exist

  Scenario: CRUD buckets using a regional endpoint
    Given I am using the S3 "us-west-2" region
    When I create a bucket
    Then the bucket should exist
    # Then the bucket should not exist

  @cors
  Scenario: Bucket CORS
    When I create a bucket
    And I put a bucket CORS configuration
    And I get the bucket CORS configuration
    Then the AllowedMethods list should inclue "DELETE POST PUT"
    Then the AllowedOrigin value should equal "http://example.com"
    Then the AllowedHeader value should equal "*"
    Then the ExposeHeader value should equal "x-amz-server-side-encryption"
    Then the MaxAgeSeconds value should equal 5000

  @lifecycle
  Scenario: Bucket lifecycles
    When I create a bucket
    And I put a transition lifecycle configuration on the bucket with prefix "/"
    And I get the transition lifecycle configuration on the bucket
    Then the lifecycle configuration should have transition days of 0
    And the lifecycle configuration should have transition storage class of "GLACIER"

  @tagging
  Scenario: Bucket Tagging
    When I create a bucket
    And I put a bucket tag with key "KEY" and value "VALUE"
    And I get the bucket tagging
    Then the first tag in the tag set should have key and value "KEY", "VALUE"

  Scenario: Access bucket following 307 redirects
    Given I am using the S3 "us-east-1" region with signatureVersion "s3"
    When I create a bucket with the location constraint "eu-west-1"
    Then the bucket should exist in region "eu-west-1"
    Then the bucket should have a location constraint of "eu-west-1"
    Then I delete the bucket in region "eu-west-1"

  Scenario: Working with bucket names that contain '.'
    When I create a bucket with a DNS compatible name that contains a dot
    Then the bucket should exist
    # Then the bucket should not exist

  @path-style
  Scenario: Operating on a bucket using path style
    Given I force path style requests
    And I create a bucket
    When I put "abc" to the key "hello" in the bucket
    And I get the key "hello" in the bucket
    Then the bucket name should be in the request path
    And the bucket name should not be in the request host
    Then I delete the object "hello" from the bucket

  # Known bug: https://github.com/aws/aws-sdk-js-v3/issues/1802
  # Scenario: Follow 307 redirect on new buckets
  #   Given I am using the S3 "us-east-1" region with signatureVersion "s3"
  #   When I create a bucket with the location constraint "us-west-2"
  #   And I put a large buffer to the key "largeobject" in the bucket
  #   Then the object "largeobject" should exist in the bucket
  #   Then I delete the object "largeobject" from the bucket
  #   Then I delete the bucket
